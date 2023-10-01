import { useFormik } from 'formik';
import * as Yup from 'yup';

const SigninForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Required'),
      password: Yup.string().required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
return (
    <form onSubmit={formik.handleSubmit} className='w-full px-5 py-2 flex flex-col'>
        <div className=''>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              className=''
            />
            {formik.touched.email && formik.errors.email ? (
              <div>{formik.errors.email}</div>
            ) : null} 
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null} 
        </div>
        <div>
            <div>
                <input 
                type='checkBox'
                name='remember'
                id='remember'
                />
                <label htmlFor="remember">Remember me</label>
            </div>
            <p>Forgot Password?</p>
        </div>
        <button type="submit">Login</button>

        <div>
            <div className='h-1 bg-stale-100 w-full'></div>
            <p>Or</p>
            <div className='h-1 bg-stale-100 w-full'></div>
        </div>
        
        <div>
            <p>Signup!</p>
        </div>
    </form>
  );
};

export default SigninForm;