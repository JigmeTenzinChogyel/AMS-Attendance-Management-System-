import React from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { dummyLeave } from '../../../Data/dummyLeave'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loading from '../../../components/Loading'
import { useState } from 'react'
import SuccessPopup from '../../../components/SuccessPopup'
import { useEffect } from 'react'
import FailedPopup from '../../../components/FailedPopup'

function DetailLeave() {

    const navigate = useNavigate()
    const { id } = useParams()
    const data = dummyLeave.find((data) => data.id == id)

    //logic for popups to make the system more interactive
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [isFailed, setIsFailed] = useState(false);
  
    const handleApprove = () => {
      setIsLoading(true);
  
      setTimeout(() => {
        setIsLoading(false);
        setIsSuccess(true);
  
        setTimeout(() => {
        setIsSuccess(false);
        }, 800);
      }, 1000);
    };
  
    const handleDeny = () => {

    }
    useEffect(() => {
      let isSuccessTimeout;
  
      if (isSuccess) {
        isSuccessTimeout = setTimeout(() => {
          setIsSuccess(false);
        }, 3000);
      }
  
      return () => {
        if (isSuccessTimeout) {
          clearTimeout(isSuccessTimeout);
        }
      };
    }, [isSuccess]);

  return (
    <div className='w-11/12 flex flex-col gap-4'>
        {
            isLoading && <Loading />
        }
        {
            isSuccess && <SuccessPopup />
        }
        {
            isFailed && <FailedPopup />
        }
        <h1 className='py-3 text-xl font-semibold'>Leave Details</h1>
        <div className='flex gap-4 items-center'>
            <p className='font-semibold text-slate-500'>From:</p>
            <h2 className='text-lg font-normal'>{data.title}</h2>
        </div>
        <div className='flex gap-4 items-center'>
            <p className='font-semibold text-slate-500'>Subject:</p>
            <h2 className='text-lg font-normal underline'>{data.subject}</h2>
        </div>
        <div className='flex gap-4 items-center'>
            <p className='font-semibold text-slate-500'>Event:</p>
            <h2 className='text-lg font-normal'>{data.eventType}</h2>
        </div>
        <div className='flex gap-8'>
            <div className='flex gap-4 items-center'>
                <p className='font-semibold text-slate-500'>Start:</p>
                <h2 className='text-lg font-normal'>{data.startTime}</h2>
            </div>
            <div className='flex gap-4 items-center'>
                <p className='font-semibold text-slate-500'>End:</p>
                <h2 className='text-lg font-normal'>{data.startTime}</h2>
            </div>
        </div>
        <button className='w-fit'>
            <FontAwesomeIcon icon="fa-solid fa-paperclip" className='mr-2'/>
            Attachment
        </button>
        <p className='w-11/12'>  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  Phasellus nec ante sit amet urna interdum pretium.
  Vivamus auctor dolor eget ante euismod, id mattis nisl iaculis.
  Nullam in tortor in nisi viverra ultricies non eget mi.
  Etiam feugiat, justo sit amet posuere malesuada, eros ex rhoncus odio,
  id feugiat libero odio eu velit.</p>
        <div >
            {
                data.status == "pending" ?
                <div className='flex gap-4'>
                    <button 
                      type="submit" 
                      className="bg-green-500 hover:bg-green-700 text-white font-semibold text-base py-2 px-3 rounded mr-2"
                      onClick={ handleApprove }>
                      Approve
                    </button>
                    <button type="button" 
                      className="bg-red-500 hover:bg-red-700 text-white font-semibold text-base py-2 px-3 rounded"
                      onClick={ handleDeny } >
                      Deny
                    </button>
                </div> :
                <button type="button" 
                  className="bg-blue-500 hover:bg-blue-700 text-white font-semibold text-base py-2 px-3 rounded"
                  onClick={() =>  navigate(-1) } >
                  Back
                </button>
            }
        </div>
    </div>
  )
}

export default DetailLeave