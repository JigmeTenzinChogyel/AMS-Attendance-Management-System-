import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import trendUp from '../../../assets/trendUp.png'
import trendDown from '../../../assets/trendDown.png'
import { Link } from 'react-router-dom'

function Trends() {
  return (
    <div className=''>
        <div className='flex'>
            <div className='bg-white w-1/4 m-1 p-3 rounded-md'>
                <div className='flex justify-between'>
                    <div >
                        <h3 className='text-sm font-semibold'>Total Students</h3>
                        <h2 className='text-xl font-bold'>600</h2>
                        <p className='text-xs font-medium'><FontAwesomeIcon icon="fa-solid fa-arrow-up" /> 30% last semester</p>
                    </div>
                    <div>
                        <img src={ trendUp } className='h-16 w-16'/>
                    </div>
                </div>
                <div className='border-t-2 text-right'>
                    <Link to='/student' className='text-xs text-blue-600 font-semibold'>View Student</Link>
                </div>
            </div>
            <div className='bg-white w-1/4 m-1 p-3 rounded-md'>
                <div className='flex justify-between'>
                    <div >
                        <h3 className='text-sm font-semibold'>Total Students</h3>
                        <h2 className='text-xl font-bold'>600</h2>
                        <p className='text-xs font-medium'><FontAwesomeIcon icon="fa-solid fa-arrow-up" /> 30% last semester</p>
                    </div>
                    <div>
                        <img src={ trendUp } className='h-16 w-16'/>
                    </div>
                </div>
                <div className='border-t-2 text-right'>
                    <Link to='/student' className='text-xs text-blue-600 font-semibold'>View Student</Link>
                </div>
            </div>
            <div className='bg-white w-1/4 m-1 p-3 rounded-md'>
                <div className='flex justify-between'>
                    <div >
                        <h3 className='text-sm font-semibold'>Total Students</h3>
                        <h2 className='text-xl font-bold'>600</h2>
                        <p className='text-xs font-medium'><FontAwesomeIcon icon="fa-solid fa-arrow-up" /> 30% last semester</p>
                    </div>
                    <div>
                        <img src={ trendUp } className='h-16 w-16'/>
                    </div>
                </div>
                <div className='border-t-2 text-right'>
                    <Link to='/student' className='text-xs text-blue-600 font-semibold'>View Student</Link>
                </div>
            </div>
            <div className='bg-white w-1/4 m-1 p-3 rounded-md'>
                <div className='flex justify-between'>
                    <div >
                        <h3 className='text-sm font-semibold'>Total Students</h3>
                        <h2 className='text-xl font-bold'>600</h2>
                        <p className='text-xs font-medium'><FontAwesomeIcon icon="fa-solid fa-arrow-up" /> 30% last semester</p>
                    </div>
                    <div>
                        <img src={ trendUp } className='h-16 w-16'/>
                    </div>
                </div>
                <div className='border-t-2 text-right'>
                    <Link to='/student' className='text-xs text-blue-600 font-semibold'>View Student</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Trends