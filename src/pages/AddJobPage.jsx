import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import formbg from "../assets/images/formbg.png"
const AddJobPage = ({ addJobSubmit }) => {
  const [title, setTitle] = useState('');
  const [type, setType] = useState('تمام وقت');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [salary, setSalary] = useState('حداقل 600 هزار تومن ');
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');

  const navigate = useNavigate();

  const submitForm = (e) => {
    e.preventDefault();

    const newJob = {
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

    addJobSubmit(newJob);

    toast.success('Job Added Successfully');

    return navigate('/jobs');
  };

  return (
    <section className='bg-slate-100 w-full m-auto  rounded-md relative'>
      
      <div className=' w-[100%]  relative flex py-6 justify-center items-center justify-items-center p-8'>
        <div className='scrollable w-[50%]  shadow-md rounded-md border p-4 h-[80vh] overflow-y-scroll '>
          
          <form onSubmit={submitForm} className='rtlform'>
            <h2 className='text-xl text-center font-semibold mb-6'>آگهی استخدام</h2>

            <div className='mb-4'>
              <label
                htmlFor='type'
                className='block text-gray-700  mb-2'
              >
                نوع کار
              </label>
              <select
                id='type'
                name='type'
                className='border  rounded-md w-full py-2 px-3 text-gray-800 outline-none'
                required
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value='تمام وقت'>تمام وقت</option>
                <option value='پاره وقت'>پاره وقت</option>
                <option value='دورکار'>دورکار</option>
                <option value='کارآموز'>کارآموزی</option>
              </select>
            </div>

            <div className='mb-4'>
              <label className='block text-gray-700  mb-2'>
                نوع تدریس
              </label>
              <input
                type='text'
                id='title'
                name='title'
                className='border rounded-md w-full py-2 px-3 mb-2 text-gray-800 outline-none '
                placeholder='نوع تدریس'
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='description'
                className='block text-gray-700  mb-2'
              >
                توضیحات
              </label>
              <textarea
                id='description'
                name='description'
                className='border rounded-md w-full py-2 px-3 outline-none'
                rows='2'
                placeholder='تجربیات   '
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4 '>
              <label
                htmlFor='type'
                className='block text-gray-700  mb-2'
              >
حقوق              </label>
              <select
                id='salary'
                name='salary'
                className='border rounded-md w-full py-2 px-3 text-gray-800 outline-none'
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

            <div className='mb-4'>
              <label className='block text-gray-700  mb-2 '>
                آدرس
              </label>
              <input
                type='text'
                id='location'
                name='location'
                className='border rounded-md w-full py-2 px-3 mb-2 text-gray-800 outline-none'
                placeholder='آدرس آموزشکده'
                required
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <h3 className='text-xl mb-5'> اطلاعات آموزشکده</h3>

            <div className='mb-4'>
              <label
                htmlFor='company'
                className='block text-gray-700  mb-2'
              >
اسم آموزشکده              </label>
              <input
                type='text'
                id='company'
                name='company'
                className='border rounded-md w-full py-2 px-3 text-gray-800 outline-none'
                placeholder='اسم آموزشکده'
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </div>

            <div className='mb-4'>
              <label
                htmlFor='company_description'
                className='block text-gray-700  mb-2'
              >
              توضیحات آموزشکده
              </label>
              <textarea
                id='company_description'
                name='company_description'
                className='border rounded-md w-full py-2 px-3 outline-none'
                rows='2'
                placeholder='آموزشکده شما در چه حوزه ای است؟'
                value={companyDescription}
                onChange={(e) => setCompanyDescription(e.target.value)}
              ></textarea>
            </div>

            <div className='mb-4'>
              <label
                htmlFor='contact_email'
                className='block text-gray-700  mb-2'
              >
ایمیل              </label>
              <input
                type='email'
                id='contact_email'
                name='contact_email'
                className='border rounded-md w-full py-2 px-3 text-gray-800 outline-none'
                placeholder='ایمیل'
                required
                value={contactEmail}
                onChange={(e) => setContactEmail(e.target.value)}
              />
            </div>
            <div className='mb-4'>
              <label
                htmlFor='contact_phone'
                className='block text-gray-700  mb-2'
              >
                 تلفن / موبایل
              </label>
              <input
                type='tel'
                id='contact_phone'
                name='contact_phone'
                className='border rounded-md w-full py-2 px-3 text-gray-800 outline-none'
                placeholder='0939000000'
                value={contactPhone}
                onChange={(e) => setContactPhone(e.target.value)}
              />
            </div>

            <div>
              <button
                className='bg-indigo-500 hover:bg-indigo-600 text-white  py-2 px-4 rounded-md-full  focus:outline-none focus:shadow-outline rounded-md w-32'
                type='submit'
              >
                ارسال
              </button>
            </div>
          </form>
        </div>
        <div className=" w-[50%]  "><img src={formbg} className='bg-cover h-3/4 w-3/4 m-auto'/></div>
      </div>
    </section>
  );
};
export default AddJobPage;
