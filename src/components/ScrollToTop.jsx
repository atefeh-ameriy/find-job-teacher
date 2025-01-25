import React, { useState, useEffect } from "react";
import { GoMoveToTop } from "react-icons/go";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 60) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
//goal code
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
  <>

   {isVisible  && ( <div
      className=" bottom-12 right-12 fixed z-50 bg-indigo-700 h-12 w-12 rounded-full flex justify-center items-center animate-bounce "
      onClick={scrollToTop}
    >
   
        <GoMoveToTop className="text-yellow-500  h-6 w-6 " />
    </div>)}  </>
  );
};

export default ScrollToTop;
