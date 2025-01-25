import img1 from "../assets/images/img1.png";
import arrow from "../assets/images/flash.png";

const Hero = ({
  title = "مدرسیاب",
  subtitle = "مدرسیاب با 10 سال سابقه یکی از بهترین اپلیکیشن های موجود برای یافتن مدرس های قابل اعتماد و خبره است.",
}) => {
  return (
    <section className=" imgdiv  py-20 mb-4 flex flex-col lg:flex-row bg-slate-100 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-start   col">
          <h2 className="text-3xl font-extrabold text-blue-950 sm:text-5xl md:text-6xl  ">
            {title}
          </h2>

          <p className="my-4 text-xl text-blue-950">{subtitle}</p>
      
          <button className="bg-indigo-500 relative top-11 text-white font-bold py-3 px-8 rounded transition duration-300 ease-in-out transform hover:bg-indigo-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-50 text-sm text-nowrap">
          ثبت نام
          </button>
          
        </div>
        <div className="arrow">
          <img src={arrow} alt="" className="w-32 h-32 relative top-32" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-start col">
          <img src={img1} alt="img1" className="w-full h-96" />
        </div>
      </div>
    </section>
  );
};
export default Hero;
