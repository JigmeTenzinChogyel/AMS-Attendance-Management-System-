import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Assign from './Assign';

function CreateEvent() {
  const navigate = useNavigate();
  const [ isView, setIsView ] = useState(false)

  // const apiUrl = 'http://192.168.137.149:3000/api/events/createEvent';
  const initialFormData = {
    title: '',
    description: '',
    startTime: '',
    duration: '',
    eventType: '', // Default event type
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    // if (name === 'startTime') {
    //   const date = new Date(value);

    //   if (!isNaN(date)) {
    //     setFormData({
    //       ...formData,
    //       startTime: date.toISOString(),
    //     });
    //   } else {
    //     console.error('Invalid date input');
    //   }
    // } else {
    //   setFormData({
    //     ...formData,
    //     [name]: value,
    //   });
    // }
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch(apiUrl, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     }

  //     const data = await response.json();
  //     console.log('Event created:', data);

  //     // Check if the response status is 200 (OK)
  //     if (response.status === 200) {
  //       // Display an alert indicating that the event has been created
  //       alert('Event created successfully');

  //       // Redirect to the event page
  //       navigate(-1); 
  //     }

  //     // Clear the form after successful submission
  //     setFormData(initialFormData);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };

  const handleView = data => {
    data == 0 && setIsView(!isView)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setIsView(!isView)
  }

  return (
    <div className="w-11/12">
      <h2 className='text-xl font-semibold my-4'>{ isView? "Assign" : "Create Event" }</h2>
      <form 
        onSubmit={handleSubmit}
        className = {isView ? 'hidden' : 'flex flex-col gap-4'}>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-semibold text-slate-400">Title:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="py-1 px-2 border w-fit"
            required
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description" className="text-sm font-semibold text-slate-400">Description:</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="py-2 px-3 border w-1/2"
            required
          />
        </div>
        <div  className="flex gap-2">
          <div className="flex flex-col gap-2">
            <label htmlFor="startTime" className="text-sm font-semibold text-slate-400">Start Date:</label>
            <input
              type="date"
              id="startTime"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              className="py-2 px-3 border w-fit"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="duration" className="text-sm font-semibold text-slate-400">Duration in hours:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={formData.duration}
              onChange={handleChange}
              className="py-2 px-3 border w-fit"
              required
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="eventType" className="text-sm font-semibold text-slate-400">Event Type:</label>
          <select
            id="eventType"
            name="eventType"
            value={formData.eventType}
            onChange={handleChange}
            className="py-2 px-3 border w-fit"
            required
          >
            <option value="">Select</option>
            <option value="assembly">Assembly</option>
            <option value="supw">SUPW</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className='flex gap-5 my-5'>
          <button 
            type="submit" 
            className="bg-green-500 hover:bg-green-700 text-white font-semibold text-base py-2 px-3 rounded mr-2">
            Assign
          </button>
          <button type="button" 
            className="bg-red-500 hover:bg-red-700 text-white font-semibold text-base py-2 px-3 rounded"
            onClick={() => {setFormData(initialFormData); navigate(-1)}} >
            Cancel
          </button>
        </div>
      </form>
      <div className={ isView ? "" : "hidden"}>
        <Assign handleView={ handleView } formData={ formData } />
      </div>
    </div>
  );
}

export default CreateEvent;
