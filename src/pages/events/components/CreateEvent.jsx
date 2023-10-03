import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateEvent() {
  const apiUrl = 'http://10.2.23.192:3000/api/events/createEvent';
  const navigate = useNavigate()

  const initialFormData = {
    title: '',
    description: '',
    startTime: '',
    eventType: '', // Default event type
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Event created:', data);

      // Clear the form after successful submission
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="w-4/5">
      <h2 className='text-2xl font-semibold '>Create Event</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
        <div className="flex flex-col gap-2">
          <label htmlFor="title" className="text-sm font-semibold text-slate-400">Title</label>
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
        <div className="flex flex-col gap-2">
          <label htmlFor="startDate" className="text-sm font-semibold text-slate-400">Start Date:</label>
          <input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="py-2 px-3 border w-fit"
            required
          />
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
            <option value="assembly">Assembly</option>
            <option value="supw">SUPW</option>
            <option value="others">Others</option>
          </select>
        </div>
        <div className='felx flex-col gap-5 my-5'>
          <button type="submit" className="bg-green-500 hover:bg-green-700 text-white font-semibold text-base py-2 px-3 rounded mr-2">
            Create Event
          </button>
          <button type="button" 
            className="bg-red-500 hover:bg-red-700 text-white font-semibold text-base py-2 px-3 rounded"
            onClick={() => {setFormData(initialFormData); navigate(-1)}} >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateEvent;