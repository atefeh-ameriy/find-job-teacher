import { Link } from "react-router-dom";
import Card from "./Card";
import saerch from "../assets/images/saerch.png";
import resume from "../assets/images/resume.png";

const HomeCards = () => {
  return (
    <section className="py-4  ">
      <div className="container-xl  lg:container m-auto  ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg relative">
          <Card>
            <div className="flex flex-row justify-between " >
              <div className="flex flex-col w-2/6 ">
                <h2 className="text-sm md:text-xl  font-bold  whitespace-nowrap ">
                  مدرس خودت رو پیدا کن
                </h2>
                <p className="mt-2 mb-4 whitespace-nowrap text-xs md:text-lg">
                  مدرسیاب با بهترین استادان کشور
                </p>
                <Link to="/jobs">
                  <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-xs md:text-sm text-nowrap">
                    جستجو مدرس
                  </button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src={saerch}
                  alt=""
                  className=" w-16 h-22  relative lg:left-16 sm:left-4 animate-scale"
                />
              </div>
            </div>
          </Card>
          <Card bg="bg-indigo-400">
            <div className="flex flex-row justify-between">
              <div className="flex flex-col w-2/6 ">
                <h2 className="text-sm md:text-xl font-bold whitespace-nowrap">
                  مدرسان گرامی
                </h2>
                <p className="mt-2 mb-4 xl:text-nowrap text-xs md:text-lg ">
                  مدرسان گرامی برای درخواست کار رزومه کارتون رو ارسال کنید.
                </p>
                <Link to="/add-job">
                  <button className="bg-indigo-500 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-yellow-100 focus:ring-opacity-50 text-xs md:text-sm text-nowrap">
                    فرم درخواست کار
                  </button>
                </Link>
              </div>
              <div className="relative">
                <img
                  src={resume}
                  alt=""
                  className=" w-20 h-22  relative  top-6 animate-rotateIn "
                />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
export default HomeCards;
