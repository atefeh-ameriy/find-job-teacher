import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useEffect, useState } from "react";
import { TiArrowSortedDown } from "react-icons/ti";
import { MdPerson } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoMoveToTop } from "react-icons/go";
import ScrollToTop from "./ScrollToTop";


//hashrout

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const [hoverTeacher, setHoverTeacher] = useState(false);

//resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768 || window.innerWidth > 768) {
        setIsOpenSidebar(false);
      }
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //active class
  const linkClass = ({ isActive }) =>
    isActive
      ? "bg-indigo-500 text-white hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 flex items-center"
      : "text-white hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 flex items-center";
      //same function

      const sameFalsefunction = ()=>{
        setIsOpenSidebar(false);
        setHoverTeacher(false);
        setIsDropdownOpen(false)
      }

  return (
    <>
      {" "}
      <nav
        className="bg-yellow-500 border-indigo-500 w-full p-4 flex items-center justify-center relative mb-1 shadow z-50 "
        id="top"
      >
        <div className="nav flex justify-between w-4/6 p-2">
          <div
            className=" relative top-2 "
            onClick={() => {
              setIsOpenSidebar(!isOpenSidebar);
            }}
          >
            <RxHamburgerMenu
              className={` h-7  w-7 md:hidden text-center  text-indigo-500 hover:text-indigo-700 ${
                isOpenSidebar ? "rotate-90 transition" : ""
              }`}
            />
          </div>
          <div className="logo">
            <NavLink className="flex justify-between" to="/">
              <img className="h-10 w-auto ml-3" src={logo} alt="React Jobs" />
              <span className="hidden md:block text-white text-2xl font-bold ml-2 top-1 relative">
                ریرا
              </span>
            </NavLink>
          </div>

          <div
            className={`  ${
              isOpenSidebar
                ? "flex-col w-full  absolute top-20 right-0  bg-yellow-500 shadow  p-2  rounded transition "
                : "links relative hidden md:flex z-50"
            }`}
          >
            <ul
              className={` ${
                isOpenSidebar ? "flex-col  " : "flex items-center "
              }`}
            >
              <li
                className="p-1"
                onClick={sameFalsefunction}
              >
                <NavLink to="/" className={linkClass}>
                  صفحه اصلی
                </NavLink>
              </li>
              <li
                className="relative p-0"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
               
              >
                <div className={` cursor-pointer ${hoverTeacher ? "bg-indigo-500 text-white hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 flex items-center ":"text-white hover:bg-indigo-700 hover:text-white rounded-md px-3 py-2 flex items-center" }`}>
                  <span className="flex items-center">
                    <TiArrowSortedDown
                      className={`ml-1 mt-2  ${
                        isDropdownOpen ? "rotate-280" : "rotate-180"
                      }`}
                    />
                    مدرسین
                  </span>
                </div>
                {isDropdownOpen && (
                  <ul className="absolute right-0 p-2  bg-indigo-500 shadow-lg rounded-md z-10 text-nowrap mt-2" onClick={()=>setHoverTeacher(true)}  onMouseLeave={() => setIsDropdownOpen(false)}>
                    <li
                      onClick={() => {
                        setIsOpenSidebar(false);
                      }}
                    >
                      <NavLink to="/jobs" className={` ${linkClass}`} >
                        مدرسین آنلاین
                      </NavLink>
                    </li>
                    <li
                      onClick={() => {
                        setIsOpenSidebar(false);
                      }}
                    >
                      <NavLink to="*" className={` ${linkClass}`} >
                        مدرسین حضوری
                      </NavLink>
                    </li>
                    <li
                      onClick={() => {
                        setIsOpenSidebar(false);
                      }}
                    >
                      <NavLink to="*" className={` ${linkClass}`} >
                        مدرسین خصوصی
                      </NavLink>
                    </li>
                  </ul>
                )}
              </li>
              <li
                className="p-1"
                onClick={sameFalsefunction}
              >
                <NavLink to="/add-job" className={linkClass}  >
                  استخدام
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="login">
            <button className="bg-indigo-500 relative flex items-center  text-white  px-4 py-3 rounded transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-sm text-nowrap">
              <MdPerson className="relative pl-1 text-xl " />
              ثبت نام
            </button>
          </div>
        </div>
        
      </nav>
   <ScrollToTop/>
    </>
  );
};

export default Navbar;
