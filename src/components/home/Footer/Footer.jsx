import React from 'react'
import img5 from '../../../assets/logo2.png'
//Icons
import { CgMail } from "react-icons/cg";
import { BsTelephoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
//Navlink
import { NavLink } from 'react-router-dom';
// motion
import { motion } from 'framer-motion';
const Footer = () => {
  return (
      <div className='container border-t mb-[5vh] mx-auto'>
        <div className=' flex justify-center items-center mx-[20px] text-center'>
        <div>
          <img className='w-1/5 mx-auto max-md:w-1/3' src={img5} alt="" />
        <div className='flex gap-7 mt-[-50px] justify-center text-[16px] mb-[20px] max-md:text-[10px] max-md:mt-[10px] '>
          <NavLink to="/"><h1><a href="#1">Bosh sahifa</a></h1></NavLink>
          <NavLink to="/About"><h1><a href="#2">Biz haqimizda </a></h1></NavLink>
          <NavLink to="/Ish"><h1><a href="#3">Ishga topshirish</a></h1></NavLink>
        </div>
        <h1 className=' text-[20px] max-md:text-[5px]'>--------------------------------------------------------------------------------------------------------------------------------------------------</h1>
          <div className='w-full my-[20px] '>
            <div className='flex text-[10px] mx-auto  justify-center gap-[30px] max-md:gap-[10px] max-md:text-[9px] items-center'>
              <h1 className='flex items-center gap-3'><CgMail className='text-[25px] text-[#00a2b7] max-md:text-[13px]' />hello@skillbirdge.com</h1>
              <h1 className='flex items-center gap-3'><BsTelephoneFill className='text-[20px] text-[#00a2b7] max-md:text-[13px]' />+998 33 019 14 35</h1>
              <h1 className='flex items-center gap-3'><FaLocationDot className='text-[20px] text-[#00a2b7] max-md:text-[13px]' />Somewhere in the World</h1>
            </div>
          </div>
        <h1 className=' text-[18px] max-md:text-[6px] mb-[20px]'>-----------------------------------------------------------------------------------------------------------------------------</h1>
        <div className='bg-[#00a2b7] w-full p-5 rounded-3xl border flex max-md:items-center '>
            <div className='flex text-white  text-[20px] gap-5 max-md:gap-1 max-md:text-[15px]'>
              <BsFacebook />
              <AiFillTwitterCircle />
              <BsLinkedin />
            </div>
            <h1 className='text-[16px] text-center w-[100%] text-[#fff] max-md:text-[8px]'>Imkon Bank All Rights Reserved</h1>
            <h1 className='text-[10px] text-center w-[15%] text-[#fff] max-md:w-[100%]  max-md:text-[8px]'>Privacy Policy | Terms of Service</h1>
        </div>
        </div>
        </div>
      </div>
  )
}

export default Footer
