import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
  "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X",
];

function CreateStudent() {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    gender: '',
    studentId: '', // Changed from studentNumber to studentId
    programme: '',
    semester: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to the server
    console.log(formData);
  };

  return (
    <div className="w-11/12">
      <h1 className="px-4 text-2xl font-semibold m-6">Register Student</h1>
      <form onSubmit={handleSubmit} className="px-10 py-4 flex flex-col justify-between items-start gap-4">
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
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
        </div>
        <div className="flex items-center w-full gap-4">
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
        <div className="flex flex-col gap-3 w-1/3">
          <label htmlFor="password" className="text-xs font-semibold">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="py-2 px-3 border"
            required
          />
        </div>
        <div className="flex flex-col gap-3 w-1/3">
          <label htmlFor="confirmPassword" className="text-xs font-semibold">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="py-2 px-3 border"
            required
          />
        </div>
        <div className='flex gap-5 my-5'>
          <button 
            type="submit" 
            className="bg-green-500 hover:bg-green-700 text-white font-semibold text-base py-2 px-3 rounded mr-2">
            Create User
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

export default CreateStudent;
