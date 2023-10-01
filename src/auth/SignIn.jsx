import { useNavigate } from "react-router";
import { useState } from "react";
import logo from '../assets/logo.png'
import attendance from '../assets/attendance.png'
import axios from 'axios';

function SignIn() {

  const [studentNumber, setStudentNumber] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      // Create a data object with studentNumber and password
      const data = {
        studentId:studentNumber,
        password,
      };
      console.log(data);
      // Send a POST request to the login endpoint
      const response = await axios.post('http://10.2.22.67:3000/api/auth/login', data);
      // Check the response status
      if (response.status === 200) {
        // Assuming your API returns refreshToken and accessToken in the response
        const { refreshToken, accessToken } = response.data;

        // Store refreshToken and accessToken in localStorage
        localStorage.setItem('refreshToken', refreshToken);
        localStorage.setItem('accessToken', accessToken);

        // Redirect to another page or perform other actions as needed
        console.log('Login successful');
        navigate("/admin");
      } else {
        // Handle other response statuses or errors
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
      // Handle login error
    }
  };

  //toggles the style when the user clicks the search
  const [isInput, setIsInput] = useState(false);

  const handleFocus = () => {
    setIsInput(true);
  };

  const handleBlur = () => {
    setIsInput(false);
  };

  console.log(isInput)
  const handleChange = () => {
    navigate("/signup")
  }

  return (  
    <div className='flex justify-center items-center h-screen bg-slate-50 font-Plus-Jakarta-Sans'>
      <div className="w-10/12 h-5/6 flex bg-white rounded-lg border">
        <div className='w-1/3'>
          <div className="flex flex-col items-center mt-10 mb-6 gap-1">
            <img src={ logo } className=""/>
            <h1 className="text-3xl font-bold mt-2">Welcome Back!</h1>
            <p className="text-xs text-slate-400">Greetings! Welcome to member login</p>
          </div>
          <form onSubmit={ handleSignIn } className="px-10 py-4">
            <div className="flex flex-col gap-3 mb-4">
              <label htmlFor="studentNumber" className="text-xs font-semibold">Student Number</label>
              <input
                type="number"
                id="studentNumber"
                name="studentNumber"
                placeholder = "xxxxxxxx"
                value={studentNumber}
                onFocus={ handleFocus }
                onBlur={ handleBlur }
                onChange={(e) => setStudentNumber(e.target.value)}
                className={isInput ? "py-2 px-3 outline-blue-500" : "py-2 px-3 border"}
                required
              />
            </div>
            <div className="flex flex-col gap-3 mb-2">
              <label htmlFor="password" className="text-xs font-semibold">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder = "*****"
                value={password}
                onFocus={ handleFocus }
                onBlur={ handleBlur }
                onChange={(e) => setPassword(e.target.value)}
                className={isInput ? "py-2 px-3 outline-blue-500" : "py-2 px-3 border"}
                required
              />
            </div>
            <button type="submit" className="mt-5 bg-blue-500 w-full py-3 px-2 text-sm text-white rounded-lg hover:bg-blue-400">
              Login
            </button>
          </form>
          <div>
            <div className="flex justify-center items-center gap-3 ">
              <div className="h-1 bg-slate-100 w-5/12"></div>
              <p className="text-slate-500">Or</p>
              <div className="h-1 bg-slate-100 w-5/12"></div>
            </div>
            <div className="mt-5 text-center">
              <span className="text-sm text-slate-500 mr-2">Dont have and Account?</span>
              <button 
              className="text-blue-500 cursor-pointer"
              onClick={ handleChange }>Signup!</button>
            </div>
          </div>
        </div>
        <div className="w-2/3 bg-slate-100 flex flex-col justify-center items-center">
          <div className="w-8/12">
            <h1 className="text-2xl font-semibold mb-2">Easiliy-Track your Attendance, detailed and</h1>
            <h1 className="text-2xl font-semibold text-blue-500 mb-2">Well-Organized</h1>
            <p className="text-xs text-slate-600 mb-8">You can always trust us with your attendance</p>
          </div>
          <img src={ attendance } className="w-3/5 h-3/5"/>
        </div>
      </div>
    </div>
  );
}

export default SignIn