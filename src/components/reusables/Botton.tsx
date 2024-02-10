import {  IconType } from "react-icons";

interface BottonProps {
  text: string;
  classN?: string;
  icon?: IconType;
  classDiv?:string
}

function Botton({ text, icon: Icon, classN ,classDiv}: BottonProps) {
  return (
    <button
      className={`flex items-center justify-center gap-5 bg-sky-700 w-[45%] max-lg:w-[40%] p-3 rounded-lg text-white  hover:bg-black`}
    >
      <div className={` flex gap-4 ${classN}`}>
        <div>{text}</div>

        <div className={`${classDiv}`}>
          <div className="p-1">
            {Icon && <Icon />}
          </div>
        </div>
      </div>
    </button>
  );
}

export default Botton;
