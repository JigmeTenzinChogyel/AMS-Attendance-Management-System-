import college1 from './../assets/college1.png'
import college2 from './../assets/college2.png'

function ReportHead() {
  return (
    <div className='flex w-full justify-between items-center mt-4 py-10 px-4 border-t-2 border-b'>
        <div>
            <img src={college1}/>
        </div>
        <div className='w-3/5 text-center flex flex-col gap-3'>
            <h2 className='text-5xl font-normal italic text-blue-500'>College of Science and Technology</h2>
            <h2 className='text-4xl font-normal italic text-blue-500'>ཚན་རིག་དང་འཕྲུལ་རིག་མཐོ་རིམ་སློབ་གྲྭ།</h2>
            <h4 className='font-normal italic text-slate-400'>Phuentsholing, Chhukha, Bhutan</h4>
        </div>
        <div>
            <img src={college2}/>
        </div>
    </div>
  )
}

export default ReportHead