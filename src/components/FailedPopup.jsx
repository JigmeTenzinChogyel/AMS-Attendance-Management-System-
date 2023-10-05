import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function FailedPopup() {
  return (
    <div className="z-20 flex justify-center items-center top-0 left-0 absolute w-full h-screen">
      <div className="flex flex-col gap-6 items-center justify-center w-1/4 h-2/6 bg-white border rounded-xl">
        <h1 className="text-5xl font-bold text-red-500">Failed</h1>
        <FontAwesomeIcon className="text-5xl text-red-500" icon="fa-solid fa-xmark" beat />
      </div>
    </div>
  );
}

export default FailedPopup;
