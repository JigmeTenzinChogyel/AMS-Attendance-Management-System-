
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

  

  return (
    
    <div className="container h-100">
      
      <div className="row h-100 justify-content-center align-items-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <div className='image'> <img src={logo} /></div>
              <form onSubmit={handleSignIn}>
                <div className="form-group">
                  <label htmlFor="studentNumber">Student Number</label>
                  <input
                    type="number"
                    id="studentNumber"
                    name="studentNumber"
                    value={studentNumber}
                    onChange={(e) => setStudentNumber(e.target.value)}
                    className="form-control"
                    required
                  />
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
                {/* Change the button text and style */}
                <button type="submit" className="btn btn-primary btn-block login-button">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn
// import SigninForm from "./SigninForm"
// import logo from '../assets/logo.png'

// function SignIn() {
//   return (
//     <div className="flex font-Plus-Jakarta-Sans">
//       <div className="w-1/3 h-screen flex flex-col gap-6">
//         <div className="flex flex-col items-center gap-1 pt-10">
//           <img src={ logo } className=""/>
//           <h1 className="text-2xl font-bold ">Welcome Back!</h1>
//           <p className="text-xs text-slate-400">Greetings! Weclome to member login</p>
//         </div>
//         <div>
//           <SigninForm />
//         </div>
//       </div>
//       <div className="w-2/3 bg-slate-100 h-c">2</div>
//     </div>
//   )
// }

// export default SignIn
