import { headerLogo } from "../assets/images";
import { menu_list } from "../constants";
import { hamburger, close } from "../assets/icons";
import { useState } from "react";

function Navbar() {
  const [hambur, setHambur] = useState(false);

  function clickHambur() {
    if (!hambur) {
      return setHambur(true);
    }
    setHambur(false);
  }
  return (
    <>
      <header className="absolute w-full -mt-5 z-10">
        <nav className="flex justify-between px-16  max-sm:px-6">
          <a href="/">
            <img src={headerLogo} alt="logo header" width={150} />
          </a>

          <div className="flex place-items-center gap-16  text-[16px] max-lg:hidden">
            <ul className="flex gap-10">
              {menu_list.map((menu) => (
                <li key={menu.href} className="nav-link relative py-2">
                  <a href={menu.href} className="font-montserrat text-gray-800">
                    {menu.label}
                  </a>
                </li>
              ))}
            </ul>
            <button className="bg-black text-white p-3 rounded-lg">
              Explorar mas
            </button>
          </div>
          <a href="#" className="flex lg:hidden" onClick={clickHambur}>
            {hambur ? (
              <>
                <img src={close} alt="hambumger" width={30}  />
              </>
            ) : (
              <>
                <img src={hamburger} alt="hambumger" width={30} />
              </>
            )}
          </a>
        </nav>
      </header>

      
    </>
  );
}

export default Navbar;
