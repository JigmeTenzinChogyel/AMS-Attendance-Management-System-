import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { dummyEvents } from '../../../Data/MyEventList';
import { useParams } from 'react-router-dom';

function EditEvent() {

  const navigate = useNavigate();
  const { id } = useParams()
  const initialData = dummyEvents.find(data => data.id == id)

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'startTime') {
      const date = new Date(value);

      if (!isNaN(date)) {
        setFormData({
          ...formData,
          startTime: date.toISOString(),
        });
      } else {
        console.error('Invalid date input');
      }
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(formData)
  }

  return (
    <div className="w-11/12">
      <h2 className='text-xl font-semibold my-4'>Edit Event</h2>
      <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
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
            <label htmlFor="duration" className="text-sm font-semibold text-slate-400">Duration:</label>
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
            Save
          </button>
          <button type="button" 
            className="bg-red-500 hover:bg-red-700 text-white font-semibold text-base py-2 px-3 rounded"
            onClick={() => navigate(-1)} >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditEvent;
