import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SuccessPopup() {
  return (
    <div className="z-20 flex justify-center items-center top-0 left-0 absolute w-full h-screen">
      <div className="flex flex-col gap-6 items-center justify-center w-1/4 h-2/6 bg-white border rounded-xl">
        <h1 className="text-5xl font-bold text-green-400">Success</h1>
        <FontAwesomeIcon className="text-5xl text-green-400" icon="fa-solid fa-check" beat />
      </div>
    </div>
  );
}

export default SuccessPopup;
