import { useState } from 'react';
import axios from 'axios'; // Import Axios
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";
import analyse from '../assets/analyse.svg'

function SignUp() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [studentId, setStudentId] = useState(''); // Changed from studentNumber to studentId
  const [department, setDepartment] = useState('');
  const [semester, setSemester] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [registrationStatus, setRegistrationStatus] = useState(null); // To store the registration status

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    try {
      // Create a data object to send to the server
      const data = {
        name,
        email,
        gender,
        studentId, 
        department,
        semester,
        password,
      };

      // Send a POST request to the registration endpoint
      const response = await axios.post('http://10.2.22.67:3000/api/auth/register', data);

      // Check the response status
      if (response.status === 201) {
        alert('Registration successful.');
        navigate("/"); // Notify the user
      } else {
        alert('Registration failed.'); // Notify the user
      }
    } catch (error) {
      console.error('Error during registration:', error);
      setRegistrationStatus('Registration failed.'); // Notify the user
    }
  };

  const handleChange = () => {
    navigate("/signin")
  }
  return (
    <div className='flex justify-center items-center h-screen bg-slate-50 font-Plus-Jakarta-Sans'>
      <div className="w-10/12 flex bg-white rounded-lg border">
        <div className="w-2/6 bg-slate-100 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center mt-10 mb-6 gap-1">
            <img src={ logo } className=""/>
            <h1 className="text-2xl font-bold mt-2">Access a Rich Ecosystem</h1>
            <p className="text-xs text-slate-700">Greetings! Welcome to member login</p>
          </div>
          <img src={analyse}/>
        </div>
        <div className='w-4/6 flex justify-center items-center py-4'>
          <div className="w-11/12 mt-2">
            <h1 className="text-2xl font-bold text-blue-500">Sign up!</h1>
            <form onSubmit={handleSignUp} className="px-10 py-4 flex flex-col justify-between items-start gap-5">
              <div className="flex justify-between w-full gap-4">
                <div className="flex flex-col gap-3 w-3/5">
                  <label htmlFor="name" className="text-xs font-semibold">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    placeholder="name"
                    onChange={(e) => setName(e.target.value)}
                    className="py-2 px-3 border"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3 w-2/5">
                  <label htmlFor="studentId" className="text-xs font-semibold">Student Number</label> {/* Changed label text */}
                  <input
                    type="number"
                    id="studentId"
                    name="studentId" // Changed from studentNumber to studentId
                    placeholder="student id"
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)} // Changed from setStudentNumber to setStudentId
                    className="py-2 px-3 border"
                    required
                  />
                </div>
              </div>
              <div className="flex justify-between items-center w-full gap-4">
                <div className="flex flex-col gap-3 w-3/5">
                  <label htmlFor="email" className="text-xs font-semibold">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="py-2 px-3 border"
                    required
                  />
                </div>
                <div className="flex flex-col gap-3 w-2/5">
                  <label htmlFor="gender" className="text-xs font-semibold">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="py-2 px-3 border"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-between items-center w-full gap-4">
                <div className="flex flex-col gap-3 w-3/5">
                  <label htmlFor="department" className="text-xs font-semibold">Department</label>
                  <select
                    id="department"
                    name="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="py-2 px-3 border"
                    required
                  >
                    <option value="">Select Department</option>
                    <option value="Information technology">Information Technology</option>
                    <option value="electronics and communications engineering">Electronics and Communications Engineering</option>
                    <option value="electrical engineering">Electrical Engineering</option>
                    <option value="engineering geology">Engineering Geology</option>
                    <option value="architecture">Architecture</option>
                    <option value="instrumentation and control engineering">Instrumentation and Control Engineering</option>
                    <option value="software engineering">Software Engineering</option>
                    <option value="water resource engineering">Water Resource Engineering</option>
                    <option value="mechanical engineering">Mechanical Engineering</option>
                    <option value="civil engineering">Civil Engineering</option>
                  </select>
                </div>
                <div className="flex flex-col gap-3 w-2/5">
                  <label htmlFor="semester" className="text-xs font-semibold">Semester</label>
                  <select
                    id="semester"
                    name="semester"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="py-2 px-3 border"
                    required
                  >
                    <option value="">Select Semester</option>
                    <option value="i">I</option>
                    <option value="ii">II</option>
                    <option value="iii">III</option>
                    <option value="iv">IV</option>
                    <option value="v">V</option>
                    <option value="vi">VI</option>
                    <option value="vii">VII</option>
                    <option value="viii">VIII</option>
                    <option value="ix">IX</option>
                    <option value="x">X</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-3 w-1/2">
                <label htmlFor="password" className="text-xs font-semibold">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="py-2 px-3 border"
                  required
                />
              </div>
              <div className="flex flex-col gap-3 w-1/2">
                <label htmlFor="confirmPassword" className="text-xs font-semibold">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="confirm password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="py-2 px-3 border"
                  required
                />
              </div>
              <div className="flex justify-center w-full">
                <button type="submit" className="mt-1 bg-blue-500 w-2/5 py-3 px-2 text-sm text-white rounded-lg hover:bg-blue-400">
                  Register
                </button>
              </div>
              {registrationStatus && (
                <div className="alert alert-info mt-3">{registrationStatus}</div>
              )}
            </form>
            <div className="mt-2 text-center">
              <span className="text-sm text-slate-500 mr-2">Already have an Account?</span>
              <button 
              className="text-blue-500"
              onClick={ handleChange }>Signin!</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;