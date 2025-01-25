import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { FaArrowLeft, FaMapMarker } from "react-icons/fa";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { HiArrowNarrowRight } from "react-icons/hi";

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();

  const onDeleteClick = (jobId) => {
    const confirm = window.confirm(
      "Are you sure you want to delete this listing?"
    );

    if (!confirm) return;

    deleteJob(jobId);

    toast.success("Job deleted successfully");

    navigate("/jobs");
  };

  return (
    <>

      <section className="bg-indigo-50 ">
        <div className="container m-auto py-6 px-6 ">
          <Link
            to="/jobs"
            className="text-indigo-500 hover:text-indigo-600 flex items-center gap-2 "
          >
            <HiArrowNarrowRight className=" size-6 " />
          </Link>
        </div>
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 md:grid-cols-70/30 w-full gap-6">
            <main>
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-2xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  <p className="text-orange-700">{job.location}</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-800 text-sm md:text-lg font-bold mb-6">
                  توضیحات
                </h3>

                <p className="mb-4">{job.description}</p>

                <h3 className="text-indigo-800 text-sm md:text-lg font-bold mb-2">حقوق</h3>

                <p className="mb-4">{job.salary} / ماهانه</p>
              </div>
            </main>

            {/* <!-- Sidebar --> */}
            <aside>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xs md:text-lg font-bold mb-6">اطلاعات آموزشکده</h3>

                <h2 className="text-2xl">{job.company.name}</h2>

                <p className="my-2">{job.company.description}</p>

                <hr className="my-4" />

                <h3 className="text-sm md:text-lg">ایمیل</h3>

                <p className="my-2 text-xs md:text-sm bg-indigo-100 p-2 ">
                  {job.company.contactEmail}
                </p>

                <h3 className="text-xs md:text-sm">شماره تلفن /موبایل</h3>

                <p className="my-2 text-xs md:text-sm bg-indigo-100 p-2 ">
                
                  {job.company.contactPhone}
                </p>
              </div>

              <div className=" flex gap-2 bg-white p-6 rounded-lg shadow-md mt-6 text-xs md:text-sm ">
                <h3 className="text-xs md:text-sm font-bold mb-6"> </h3>
                <Link
                  to={`/edit-job/${job.id}`}
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  تغییرات
                </Link>
                <button
                  onClick={() => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  حذف
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
