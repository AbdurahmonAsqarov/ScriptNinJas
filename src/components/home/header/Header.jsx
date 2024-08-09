import React from 'react'
import { motion } from 'framer-motion'
// img
import Tick from '../../../assets/Tick.png'
import buss from '../../../assets/bussines.jpg'
import Main from '../main/Main'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='mx-[10vw] flex max-xl:mx-[5vw] max-lg:flex-col justify-between'>
      <div id='1' className=''>
        <motion.div animate={{x:0}} initial={{x:-900}} transition={{delay:1}}>
          <div className='flex items-center justify-between text-[16px] max-xl:text-[10px] max-xl:w-[260px] border w-[380px] bg-[#78c2cd98] py-2 px-4 rounded-3xl mb-[3vh] mt-[20vh] max-lg:mt-[10vh]'>
            <img src={Tick} alt="" className='w-5 h-5 '/>
            <h1 className='text-white'>MChJ talab qilinmaydi, kredit tekshiruvi yo'q.</h1>
          </div>
        </motion.div>
        <motion.div animate={{x:0,y:0}} initial={{x:-600,y:600}} transition={{delay:0.5}}>
          <div className="bg ">
          <motion.h1 animate={{x:0}} initial={{x:-900}} transition={{delay:1.2}}>
            <h1 className='text-[48px]  max-xl:text-[45px] max-md:text-[40px]'>Imkon Bank-ga <span className='max-lg:hidden inline'>xush</span></h1>
          </motion.h1>
          <motion.h1 animate={{x:0}} initial={{x:-900}} transition={{delay:1.4}}>
            <h1 className='text-[48px]  max-xl:text-[45px] max-md:text-[40px]'><span className='hidden max-lg:inline'>xush</span> kelibsiz <span className='text-[#00a2b7] font-bold'>Moliyaviy </span></h1>
          </motion.h1>
          <motion.h1 animate={{x:0}} initial={{x:-900}} transition={{delay:1.6}}>
            <h1 className='text-[48px]  max-xl:text-[45px] text-[#00a2b7] font-bold max-md:text-[40px]'>sayohatingizni kuchaytiring</h1>
          </motion.h1>

          <motion.h2 animate={{x:0}} initial={{x:-900}} transition={{delay:1.3}}>
            <h2 className='w-[85vh] mt-[5vh] text-sm max-xl:text-[10px] max-md:w-auto '>Imkon Bank-da bizning vazifamiz jismoniy shaxslar va korxonalarga moliyaviy maqsadlariga erishish uchun keng qamrovli bank yechimlarini taqdim etishdan iborat. Biz mijozlarimizning ehtiyojlarini birinchi o'ringa qo'yamiz.
            </h2>
          </motion.h2>
          <motion.button animate={{y:0}} initial={{y:500}} transition={{delay:1.8}}>
            <NavLink to='/Login'>
              <button className='mt-[4vh] px-[2vh] h-[7vh] rounded-[9px] text-white text-xl bg-[#00a2b7] hover:bg-[#78c2cd98] hover:shadow-lg'>Akkaunt yaratish</button>
            </NavLink>
          </motion.button>
          </div>
        </motion.div>
      </div>

      <motion.div animate={{x:0}} initial={{x:700}} transition={{delay:1.5}}>
        <div>
          <img src={buss} alt="" className='h-[75vh] w-[60vh] rounded-[3vh] mt-[14vh]'/>
        </div>
      </motion.div>
    </div>
    <Main/>
    </div>
  )
}

export default Header
