import logo from  '../assets/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AdminHeader() {
  return (
    <div className='pl-10 pr-10 flex items-center'>
        <div className=''>
            <img src={logo} className='w-32 h-32'/>
        </div>
        <div className='ml-40'>
            <h1>Title</h1>
        </div>
        <div className='ml-auto flex justify-evenly gap-20'>
            <div>
              <input type='text' placeholder='Search' className='mr-2 p-1 pl-5 pr-5 border-2 border-black rounded-3xl'/>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='font-2xl'/>
            </div>
            <h3>Admin</h3>
        </div>
    </div>
  )
}

export default AdminHeader