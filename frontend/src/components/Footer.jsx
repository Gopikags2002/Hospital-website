import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='w-full flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10  mt-40 text-sm'>

        <div>
          <img className='mb-5 w-40' src='./images/logoo.svg' alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6 mx-10'>Our GSG Hospital takes care of all the patients who is in need of treatment.GSG Hospital, is a multi-specialty healthcare facility that offers a variety of medical services to the local community.</p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+9-361-339-842</li>
            <li>gopika.gs.cse.2020@snsct.org</li>
          </ul>
        </div>

      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024 @GSG.com - All Right Reserved.</p>
      </div>

    </div>
  )
}

export default Footer
