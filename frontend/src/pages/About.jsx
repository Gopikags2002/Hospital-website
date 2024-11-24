import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>ABOUT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcom to GSG Hospital. We are dedicated in providing the highest quality healthcare services with a commitment to excellence and compassion. Established with the vision of creating a space where patients feel cared for and respected, GSG Hospital combines state-of-the-art medical technology with a team of highly skilled professionals who are devoted to improving health outcomes and enhancing the patient experience.</p>
          <p>We are proud to serve our community by not only providing essential medical services but also by offering wellness programs, educational workshops, and health screenings. Through these initiatives, we aim to improve overall community health and prevent illness.</p>
          <b className='text-gray-800'>Our Vision</b>
          <p>To be a leading healthcare institution that transforms lives by setting the standard for patient-centered care, innovative treatments, and community health initiatives. Our vision at GSG is to create a future where healthcare is accessible, compassionate, and rooted in excellence, empowering every individual to achieve their best health.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>WHY  <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERFORMANCE:</b>
          <p>Round-the-clock emergency care with a dedicated team ready to handle critical cases at any hour</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>CONSULTATION </b>
          <p>Virtual consultations allow patients to connect with doctors from the comfort of their homes, reducing the need for in-person visits</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>BESPOKE CARE</b>
          <p >Assigning dedicated healthcare coordinators or personal advisors to guide patients through their journey, offering personalized support and advice.</p>
        </div>
      </div>

    </div>
  )
}

export default About
