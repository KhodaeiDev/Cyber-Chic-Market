import { useState } from "react";
import { NavLink } from "react-router-dom";

function Listtolist({ db, ...itemmenu }) {
  const [flagitemto, setflagitemto] = useState(false);
  console.log(db.menu);
  return (
    <>
      <li
        onClick={() => setflagitemto(!flagitemto)}
        className={` w-[250px] mx-auto  h-[40px] cursor-pointer ${flagitemto ? 'bg-sky-200 text-sky-500 ':"" }  flex mt-4 px-1 items-center justify-between rounded-lg shadow-sm scale-100 hover:scale-95  shadow-sky-200 hover:bg-sky-400 hover:text-white `}
        key={itemmenu.id}
      >
        {itemmenu.title}
        {db.menu && (
          <button className=" w-[25px] h-[25px] mask mask-hexagon bg-sky-500 text-white text-[15px]">
            {flagitemto ? "-" : "+"}
          </button>
        )}
      </li>
      { db.menu[itemmenu.id - 1] && flagitemto && (
        <ul className={`${flagitemto ? 'bg-sky-100 text-sky-500':'' } w-[240px] mx-auto`}>
          {
            db.menu[itemmenu.id - 1].menu.map((item) => (
              <NavLink className={' w-full h-[40px]  flex justify-center items-center  mt-2 px-1 rounded-xl scale-100 hover:scale-95 hover:bg-sky-400 hover:text-white   shadow-sm shadow-sky-300'}  key={item.id}  to={"/"}>{item.title}</NavLink>
            ))}
            
        </ul>
      )}
    </>
  );
}

export default Listtolist;
