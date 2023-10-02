/* eslint-disable react/prop-types */
import logo from  '../assets/logo.png'
/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' */

function UserHeader({ title }) {

  return (
    <div className='py-4 w-full px-10 flex items-center fixed top-0 bg-white z-10'>
        <div className=''>
            <img src={logo} className='w-16 h-16'/>
        </div>
        <div className='ml-40'>
            <h1 className='pl-5 text-3xl font-semibold'>{ title }</h1>
        </div>
        <div className='ml-auto flex justify-evenly gap-20'>
            
            <h3>User</h3>
        </div>
    </div>



  )
}

export default UserHeader

