import { useState } from 'react';
import './SignUp.css';
import axios from 'axios'; // Import Axios
import logo from '../assets/logo.png';
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className="image">
                <img src={logo} alt="Example Image" />
              </div>

              <form onSubmit={handleSignUp}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="gender">Gender</label>
                  <select
                    id="gender"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="form-control"
                    required
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="studentId">Student Number</label> {/* Changed label text */}
                  <input
                    type="number"
                    id="studentId"
                    name="studentId" // Changed from studentNumber to studentId
                    value={studentId}
                    onChange={(e) => setStudentId(e.target.value)} // Changed from setStudentNumber to setStudentId
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="department">Department</label>
                  <select
                    id="department"
                    name="department"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                    className="form-control"
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
                <div className="form-group">
                  <label htmlFor="semester">Semester</label>
                  <select
                    id="semester"
                    name="semester"
                    value={semester}
                    onChange={(e) => setSemester(e.target.value)}
                    className="form-control"
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
                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="form-control"
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block">
                  Register
                </button>

                {registrationStatus && (
                  <div className="alert alert-info mt-3">{registrationStatus}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
