import React from 'react'
import { FaAngleDown } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='h-[452px] flex bg-[#212731] justify-around items-center  text-white'>
      <div className='grid grid-cols-1 gap-4'>
        <p className='text-xl'>CATEGORIES</p>
        <p>Contact</p>
        <p>Web Builder</p>
        <p>Hosting</p>
        <p>Data Center</p>
        <p>Robotic-Automation</p>
      </div>
      <div className='grid grid-cols-1 gap-4'>
        <p className='text-xl'>CONTACT</p>
        <p>Contact</p>
        <p>Privacy Policy</p>
        <p>Terms Of Service</p>
        <p>Categories</p>
        <p>About</p>
      </div>
      <div>
        <p className='flex items-center'>
          <span>United States</span> <FaAngleDown/>
        </p>
      </div>
    </div>
  )
}

export default Footer
