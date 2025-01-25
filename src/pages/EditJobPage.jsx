import { useState } from "react";
import { useParams, useLoaderData, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const EditJobPage = ({ updateJobSubmit }) => {
  const job = useLoaderData();
  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [description, setDescription] = useState(job.description);
  const [salary, setSalary] = useState(job.salary);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescription] = useState(
    job.company.description
  );
  const [contactEmail, setContactEmail] = useState(job.company.contactEmail);
  const [contactPhone, setContactPhone] = useState(job.company.contactPhone);

  const navigate = useNavigate();
  const { id } = useParams();

  const submitForm = (e) => {
    e.preventDefault();

    const updatedJob = {
      id,
      title,
      type,
      location,
      description,
      salary,
      company: {
        name: companyName,
        description: companyDescription,
        contactEmail,
        contactPhone,
      },
    };

    updateJobSubmit(updatedJob);

    toast.success("Job Updated Successfully");

    return navigate(`/jobs/${id}`);
  };

  return (
    <section className="bg-indigo-50">
      <div className="container m-auto max-w-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0">
          <form onSubmit={submitForm}>
            <h2 className="text-3xl text-center font-semibold mb-6">
              تغییرات{" "}
            </h2>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                نوع کار{" "}
              </label>
              <select
                id="type"
                name="type"
                className="border rounded w-full py-2 px-3"
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="تمام وقت">تمام وقت</option>
                <option value="پاره وقت">پاره وقت</option>
                <option value="دورکار">دورکار</option>
                <option value="کارآموز">کارآموزی</option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                نوع تدریس
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder="  نوع تدریس"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="description"
                className="block text-gray-700 font-bold mb-2"
              >
                توضیحات
              </label>
              <textarea
                id="description"
                name="description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="توضیحات"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="type"
                className="block text-gray-700 font-bold mb-2"
              >
                حقوق
              </label>
              <select
                id="salary"
                name="salary"
                className="border rounded w-full py-2 px-3"
                required
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              >
                   <option value='حداقل 600 هزار تومن'>حداقل 600 هزار تومن</option>
                <option value='600,000-700,000'>600,000-700,000</option>
                <option value='700,000 - 800,000'>700,000 - 800,000</option>
                <option value='800,000 - 900,000'>800,000 -900,000</option>
                <option value='900,000 - 1,000,000'>900,000 - 1,000,000</option>
                <option value='حداکثر 2,000,000  '>حداکثر 2,000,000  </option>
              </select>
            </div>

            <div className="mb-4">
              <label className="block text-gray-700 font-bold mb-2">
                آدرس
              </label>
              <input
                type="text"
                id="location"
                name="location"
                className="border rounded w-full py-2 px-3 mb-2"
                placeholder=" آدرس آموزشکده"
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className="text-2xl mb-5"> اطلاعات آموزشکده</h3>

            <div className="mb-4">
              <label
                htmlFor="company"
                className="block text-gray-700 font-bold mb-2"
              >
نام آموزشکده              </label>
              <input
                type="text"
                id="company"
                name="company"
                className="border rounded w-full py-2 px-3"
                placeholder="Company Name"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className="mb-4">
              <label
                htmlFor="company_description"
                className="block text-gray-700 font-bold mb-2"
              >
توضیحات آموزشکده              </label>
              <textarea
                id="company_description"
                name="company_description"
                className="border rounded w-full py-2 px-3"
                rows="4"
                placeholder="آموزشکده شما در چه حوزه ای است ؟"
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className="mb-4">
              <label
                htmlFor="contact_email"
                className="block text-gray-700 font-bold mb-2"
              >
ایمیل              </label>
              <input
                type="email"
                id="contact_email"
                name="contact_email"
                className="border rounded w-full py-2 px-3"
                placeholder="Email address for applicants"
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="contact_phone"
                className="block text-gray-700 font-bold mb-2"
              >
               تلفن / موبایل
              </label>
              <input
                type="tel"
                id="contact_phone"
                name="contact_phone"
                className="border rounded w-full py-2 px-3"
                placeholder="Optional phone for applicants"
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline"
                type="submit"
              >
                ذخیره
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default EditJobPage;
