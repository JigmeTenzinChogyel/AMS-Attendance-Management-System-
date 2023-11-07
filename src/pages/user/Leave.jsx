import { useState, useEffect } from "react";
import { IP } from "../../utils/ip";
import axios from 'axios';

function Leave() {
  const studentDetails = JSON.parse(localStorage.getItem("studentDetails"));
  const [formData, setFormData] = useState({
    subject: "",
    events: [], // New field for selected events
    description: "",
    attachments: [],
  });
  const [availableEvents, setAvailableEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`http://${IP}:3000/api/events/getFutureEvents`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setAvailableEvents(data);
      } catch (error) {
        console.error('Error fetching events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleEventSelection = (event) => {
    const eventId = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setFormData((prevData) => ({
        ...prevData,
        events: [...prevData.events, eventId],
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        events: prevData.events.filter((id) => id !== eventId),
      }));
    }
  };

  const handleChange = (e) => {
    const { name, value, type } = e.target;

    if (type === "file") {
      const files = Array.from(e.target.files);
      setFormData({
        ...formData,
        attachments: files,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create an array to store promises for file uploads
      const fileUploadPromises = formData.attachments.map((file) => {
        return uploadFileToServer(file);
      });

      const uploadedFiles = await Promise.all(fileUploadPromises);

      const leaveRequestData = {
        studentId: `${studentDetails.studentId}`,
        eventId: formData.events[0],
        explanation: formData.description,
        attachmentURL: uploadedFiles[0],
      };

      console.log(leaveRequestData);

      const response = await fetch(`http://${IP}:3000/api/leave/createLeave`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leaveRequestData),
      });

      if (response.ok) {
        console.log("Leave request submitted successfully");
        // Display a success message
        window.alert("Leave request submitted successfully");
        // Clear the form data
        setFormData({
          subject: "",
          events: [],
          description: "",
          attachments: [],
        });
        // Navigate back to the previous page
        window.history.back();
      } else {
        console.error('Failed to submit leave request');
      }
    } catch (error) {
      console.error('Error submitting leave request:', error);
    }
  }

  const uploadFileToServer = async (file) => {
    try {
      const formData = new FormData();
      formData.append('file', file);
  
      const response = await axios.post(`http://${IP}:3000/api/file/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data', // Set the content type to multipart/form-data
        },
      });
  
      if (response.status === 200) {
        const data = response.data;
        console.log('File submitted successfully');
        return data;
      } else {
        console.error('Failed to upload file');
        return null;
      }
    } catch (error) {
      console.error('Error uploading file:', error);
      return null;
    }
  };  

  return (
    <div className="w-4/5 pt-10 pb-5 flex flex-col gap-5">
      <h2 className="text-2xl font-bold">Leave Application Form</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-sm font-semibold text-slate-400">
            Mail:
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="border border-gray-300 rounded-md p-2 w-full h-80"
            rows="4"
            required
          ></textarea>
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-slate-400">
            Select Event(s) You Will Be Absent:
          </label>
          {availableEvents.map((event) => (
            <label key={event.id} className="flex items-center">
              <input
                type="checkbox"
                name="events"
                value={event.id}
                checked={formData.events.includes(event.id)}
                onChange={handleEventSelection}
              />
              {event.title}
            </label>
          ))}
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="attachments" className="text-sm font-semibold text-slate-400">
            Attachments (Images or PDFs):
          </label>
          <input
            type="file"
            id="attachments"
            name="attachments"
            onChange={handleChange}
            multiple
            className="border border-gray-300 rounded-md p-2 w-fit"
          />
        </div>
        <button
          type="submit"
          className="w-fit bg-blue-500 text-white px-4 py-2 rounded-md hover-bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Leave;
