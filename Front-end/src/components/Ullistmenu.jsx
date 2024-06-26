import { useState } from "react";
import Listtolist from "./Listtolist.jsx";
import { useNavigate } from "react-router-dom";

function Ullistmenu({ db, ...menu }) {
  const [flagitem, setflagitem] = useState(false);
  const navigate = useNavigate()
  return (
    <>
      <li
        onClick={() =>{
          if(db[menu.id - 1]?.menu){
            setflagitem(!flagitem)
          }else{
            navigate(`/ttt`)
          }
          }}
        className={` w-[260px] mx-auto  h-[40px] text-sky-500  ${flagitem ? 'bg-sky-200 ':"" }  cursor-pointer flex mt-4 px-1  items-center justify-between rounded-lg shadow-sm scale-100 hover:scale-95 hover:bg-sky-400 hover:text-white  shadow-sky-200 `}
      >
        {menu.title}
        {db[menu.id - 1]?.menu && (
          <button className=" w-[25px] h-[25px] mask mask-hexagon bg-sky-500 text-white text-[15px]">
            {flagitem ? "-" : "+"}
          </button>
        )}
      </li>
      {db[menu.id - 1]?.menu && flagitem && (
        <ul className={`${flagitem ? 'bg-sky-100  text-sky-500':'' } w-[270px] mx-auto rounded-b-lg `}>
          {db[menu.id - 1]?.menu &&
            db[menu.id - 1].menu.map((itemmenu) => (
              <Listtolist key={itemmenu.id}  db={db[menu.id - 1]} {...itemmenu}  />
            ))}
        </ul>
      )}
    </>
  );
}

export default Ullistmenu;
