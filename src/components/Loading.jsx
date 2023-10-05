import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Loading() {
  return (
    <div>
        <div className="z-20 flex justify-center items-center top-0 left-0 absolute w-full h-screen bg-slate-200 opacity-70">
          <FontAwesomeIcon className="text-3xl text-black" icon="fa-solid fa-spinner" spin />
        </div>
    </div>
  )
}

export default Loading