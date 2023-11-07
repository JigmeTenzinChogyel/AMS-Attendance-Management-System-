import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IP } from "../../../utils/ip";

const programOptions = [
  "Select programme",
  "IT",
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

const roleOptions = ["admin", "student", "councilor"];

function EditStudent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [formData, setFormData] = useState({
    Class: {
      programme: "Select programme",
      semester: "Select Semester"
    },
    account: {
      role: "student"
    },
    classId: "",
    email: "",
    gender: "",
    name: "",
    studentId: ""
  });

  useEffect(() => {
    // Fetch student details from the API
    const fetchStudentDetails = async () => {
      try {
        const response = await fetch(`http://${IP}:3000/api/student/get-student-info/${id}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFormData(data);
      } catch (error) {
        console.error('Error fetching student details:', error);
      }
    };

    fetchStudentDetails();
  }, [id]);

  const handleSemesterChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      Class: {
        ...prevData.Class,
        semester: value
      }
    }));
  };

  const handleProgrammeChange = (e) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      Class: {
        ...prevData.Class,
        programme: value
      }
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
  
    try {
      const response = await fetch(`http://${IP}:3000/api/student/update-student`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      // Alert on success
      alert("Student details updated successfully.");
  
      // Navigate back to the previous page
      navigate(-1);
    } catch (error) {
      console.error('Error updating student details:', error);
    }
  };

  return (
    <div className="w-11/12">
      <h1 className="text-xl font-semibold my-4">Edit Details</h1>
      <form onSubmit={handleSubmit} className="flex flex-col justify-between items-start gap-4">
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
              <option value="MALE">Male</option>
              <option value="FEMALE">Female</option>
            </select>
          </div>
        </div>
        <div className="flex items-center w-full gap-4">
          <div className="flex flex-col gap-3 w-fit">
            <label htmlFor="semester" className="text-xs font-semibold">Semester</label>
            <select
              id="semester"
              name="semester"
              value={formData.Class.semester}
              onChange={handleSemesterChange}
              className="py-2 px-3 border"
              required
            >
              {semesterOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="flex flex-col gap-3 w-fit">
            <label htmlFor="programme" className="text-xs font-semibold">Programme</label>
            <select
              id="programme"
              name="programme"
              value={formData.Class.programme}
              onChange={handleProgrammeChange}
              className="py-2 px-3 border"
              required
            >
              {programOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="flex flex-col gap-3 w-fit">
          <label htmlFor="role" className="text-xs font-semibold">Role</label>
          <select
            id="role"
            name="role"
            value={formData.account.role}
            onChange={(e) => {
              const { value } = e.target;
              setFormData((prevData) => ({
                ...prevData,
                account: {
                  ...prevData.account,
                  role: value,
                },
              }));
            }}
            className="py-2 px-3 border"
            required
          >
            {roleOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className='flex gap-5 my-5'>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-semibold text-base py-2 px-3 rounded mr-2">
            Save
          </button>
          <button
            type="button"
            className="bg-red-500 hover-bg-red-700 text-white font-semibold text-base py-2 px-3 rounded"
            onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default EditStudent;
