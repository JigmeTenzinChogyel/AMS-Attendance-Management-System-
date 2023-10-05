import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { studentDetails } from "../../../Data/dummyStudent";

const programOptions = [
  "Select programme",
  "Information Technology",
  "Electronics and Communications Engineering",
  "Electrical Engineering",
  "Engineering Geology",
  "Architecture",
  "Instrumentation and Control Engineering",
  "Software Engineering",
  "Water Resource Engineering",
  "Mechanical Engineering",
  "Civil Engineering",
];

const semesterOptions = [
  "Select Semester",
  "i", "ii", "iii", "iv", "v", "vi", "vii", "viii", "ix", "x",
];

const roleOptions = [
  "Admin",
  "Student",
  "Councilor",
]

function EditStudent() {

  const navigate = useNavigate()
  const { id } = useParams()
  const initialData = studentDetails.find(data => data.id == id)

  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
  };


  return (
    <div className="w-11/12">
      <h1 className="text-xl font-semibold my-4">Edit Details</h1>
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col justify-between items-start gap-4">
        <div className="flex w-full gap-4">
          <div className="flex flex-col gap-3 w-1/3">
            <label htmlFor="name" className="text-xs font-semibold">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              placeholder="Name"
              onChange={handleChange}
              className="py-2 px-3 border"
              required
            />
          </div>
          <div className="flex flex-col gap-3 w-fit">
            <label htmlFor="studentId" className="text-xs font-semibold">Student Number</label>
            <input
              type="text"
              id="studentId"
              name="studentId"
              placeholder="Student ID"
              value={formData.studentId}
              onChange={handleChange}
              className="py-2 px-3 border"
              required
            />
          </div>
        </div>
        <div className="flex w-full gap-4">
          <div className="flex flex-col gap-3 w-1/3">
            <label htmlFor="email" className="text-xs font-semibold">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              placeholder="Email"
              onChange={handleChange}
              className="py-2 px-3 border"
              required
            />
          </div>
          <div className="flex flex-col gap-3 w-fit">
            <label htmlFor="gender" className="text-xs font-semibold">Gender</label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
              className="py-2 px-3 border"
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>
        </div>
        <div className="flex items-center w-full gap-4">
          <div className="flex flex-col gap-3 w-fit">
            <label htmlFor="semester" className="text-xs font-semibold">Semester</label>
            <select
              id="semester"
              name="semester"
              value={formData.semester}
              onChange={handleChange}
              className="py-2 px-3 border"
              required
            >
              {semesterOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-3 w-fit">
            <label htmlFor="programme" className="text-xs font-semibold">Programme</label>
            <select
              id="programme"
              name="programme"
              value={formData.programme}
              onChange={handleChange}
              className="py-2 px-3 border"
              required
            >
              {programOptions.map((option) => (
                <option key={option} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-fit">
          <label htmlFor="role" className="text-xs font-semibold">Semester</label>
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="py-2 px-3 border"
            required
          >
            {roleOptions.map((option) => (
              <option key={option} value={option}>{option}</option>
            ))}
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
            onClick={() =>  navigate(-1) } >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditStudent;
