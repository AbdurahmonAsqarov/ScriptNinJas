import React from 'react'
import { IoBagRemove } from "react-icons/io5";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { CiSaveDown2 } from "react-icons/ci";
import { motion } from 'framer-motion';

const App = () => {
  return (
   <div className='pb-[10vh] gg '>
     <div className='container mx-auto py-[5vh] h-full'>
      
      <div className=' mx-auto relative contact2 mt-[-35px] '>
        <motion.h1 animate={{y:0}} initial={{y:20}} transition={{delay:0.8}}>
          <h1 className='text-[48px] font-bold text-center pt-[80px] mb-[70px] text-[#fff] max-md:text-[40px]'>Bizning bankimiz</h1>
        </motion.h1>
        <div className='text-center text-white'>
          <motion.h1 animate={{y:0}} initial={{y:-50}} transition={{delay:0.8}}>
            <h1 className='text-[30px] font-bold my-[30px] text-[#00a2b7]'>Yillik sarghisob</h1>  
          </motion.h1>
          <motion.p animate={{y:0}} initial={{y:-50}} transition={{delay:1}}>
            <p className='leading-7 text-[20px] px-2'>Bizning bankimizda biznes g'oyalar uchun pullar ajratilmoqda bu esa yoshlarni <br /> ish bilan taminlashga yordam beryabmiz bu esa  bizning yillik daromadimiz <br /> va davlarga katta faoyda olib kelmoqda yillik sarhisobni <br /> ko'rishingiz mumkin!!!</p>
          </motion.p>
        </div>
        <div className='contact2 bg_1'>
        <div className='flex mt-[100px] gap-[170px] justify-center text-white max-md:gap-[40px]'>
          <motion.div animate={{x:0}} initial={{x:-100}} transition={{delay:1}}>
            <div>
              <h1 className=' text-[50px] text-[#00a2b7]'>65%</h1>
              <p className='text-center'>Oylik<br />Sarghisob</p>
            </div>
          </motion.div>
          <motion.div animate={{y:0}} initial={{y:100}} transition={{delay:0.6}}>
            <div>
              <h1 className=' text-[50px] text-[#00a2b7]'>70%</h1>
              <p className='text-center'>Yillik<br />Sarghisob</p>
            </div> 
          </motion.div>
          <motion.div animate={{x:0}} initial={{x:100}} transition={{delay:0.8}}>
           <div>
            <h1 className=' text-[50px] text-[#00a2b7]'>45%</h1>
            <p className='text-center'>Daromad <br /> oshishi</p>
          </div>
          </motion.div>
        </div>
        </div>
      </div>
      <div className=' relative  '>
      <div className='container mx-auto w-[90%] flex justify-center text-center mt-[100px] pb-[100px] gap-[170px] text-[#fff] max-md:block'>
        <div className='w-[32%] border-2 rounded-xl p-5 mt-[50px]  bg-[#0000007c] max-md:w-[100%] hover:shadow-2xl hover:translate-y-[-20px] transition duration-300 '>
          <motion.h1 animate={{y:-26}} whileInView={{y:0}} transition={{delay:0.7}}>
            <h1 className='text-[20px] font-bold mb-[30px] '>Tolovlar</h1>
          </motion.h1>
          <motion.p animate={{y:-30}} whileInView={{y:0}} transition={{delay:0.8}}>
            <p className='leading-7'>Bizning xavfsiz onlayn-banking platformamiz orqali istalgan vaqtda, istalgan joyda hisobingizga kirish qulayligidan rohatlaning. Balanslarni tekshiring, pul o'tkazing va hisob-kitoblarni osonlik bilan to'lang.</p> 
          </motion.p>
        </div>
        <motion.div className='w-[32%] border-2 rounded-xl p-5 bg-[#0000007c] max-md:w-[100%] mt-[50px] hover:shadow-2xl hover:translate-y-[-20px] transition duration-300' animate={{x:180}} whileInView={{x:0}} transition={{delay:0.5}}>
          <div >
            <h1 className='text-[20px] font-bold mb-[30px]'>Banking ilovasi</h1>
            <p className='leading-7'>Bizning foydalanuvchilarga qulay mobil banking ilovamiz yordamida yo‘l-yo‘lakay moliya bilan bog‘lanib qoling. Smartfon yoki planshetdan hisoblaringizni osongina boshqaring, cheklarni depozit qiling va to'lovlarni amalga oshiring.</p>
          </div>
        </motion.div>
      </div>
      </div>
    </div>
        <div className='container mx-auto w-[90%] flex justify-center text-center gap-[170px] text-[#fff] max-md:block  '>
          <div className='w-[32%] border-2 rounded-xl p-5 mt-[70px] bg-[#00a2b7] max-md:w-[100%] hover:bg-[#fff] hover:text-[#00a2b7] hover:translate-y-[-20px] transition duration-300 hover:shadow-xl'>
            <h1 className='text-[20px] font-bold mb-[30px] '>To'lov va pul o'tkazmalari</h1>
            <p className='leading-7'>Bizning qulay hisob-kitob xizmatimiz bilan vaqtni tejang va kechikish to‘lovlaridan qoching. Bir necha marta bosish orqali takroriy toʻlovlarni oʻrnating yoki hisoblaringiz oʻrtasida bir martalik oʻtkazmalarni amalga oshiring.</p>
          </div>
          <div className='w-[32%] border-2 rounded-xl p-5 bg-[#00a2b7] max-md:w-[100%] mt-[70px]  hover:bg-[#fff] hover:text-[#00a2b7] hover:translate-y-[-20px] transition duration-300 hover:shadow-xl'>
            <h1 className='text-[20px] font-bold mb-[30px]'>Xavfsiz operatsiyalar</h1>

            <p className='leading-7'>Tranzaktsiyalaringiz sanoatning yetakchi xavfsizlik choralari bilan himoyalanganligini bilib, ishonch hosil qiling. Sizning moliyaviy ma'lumotlaringizni himoya qilish uchun biz shifrlash va ko'p faktorli autentifikatsiyadan foydalanamiz.</p>
          </div>
        </div>

        <div className='container mx-auto justify-center mt-[100px] w-[90%]  flex gap-[100px] max-md:block  '> 
          <div className='contact2 text-center w-[26%] items-center justify-center border-4 border-teal-500 text-[#00a2b7] mt-[100px]  rounded-xl p-5 max-md:w-[100%] group hover:bg-[#00a2b7] hover:text-[#fff] hover:translate-y-[-20px] transition duration-300 hover:shadow-xl '>
           <IoBagRemove className=' w-[100%] text-[40px] text-[#00a2b7] group-hover:text-[#fff]' />
           <h1 className='font-bold my-[20px]' >Hisoblarni tekshirish</h1> 
           <p>Hisobvaraqlarni tekshirish imkoniyatlari qatorimiz yordamida mablag'ingizga oson va qulay kirishdan rohatlaning. Onlayn va mobil banking, debet kartalari va bankomatlarga bepul kirish kabi xususiyatlardan foydalaning.</p>
          </div>
          <div className='contact2 text-center w-[26%] items-center justify-center border-4 border-teal-500 text-[#00a2b7]  rounded-xl p-5 max-md:w-[100%] my-[70px] group hover:bg-[#00a2b7] hover:text-[#fff] hover:translate-y-[-20px] transition duration-300 hover:shadow-xl'>
            <CiSaveDown2 className='w-[100%] text-[40px] text-[#00a2b7] group-hover:text-[#fff]' />
            <h1 className='font-bold my-[20px]' >Jamg'arma hisoblari</h1>
            <p  >Raqobatbardosh foiz stavkalari va omonat hisobvarag'ining moslashuvchan variantlari yordamida jamg'armalaringizni yarating. Muayyan maqsad uchun jamg‘aryapsizmi yoki vaqt o‘tishi bilan boyligingizni oshirishni xohlaysizmi, bizda siz uchun to‘g‘ri hisob mavjud.</p>
          </div>
            <div className='contact2 text-center w-[26%] items-center justify-center border-4 mt-[100px] border-teal-500 text-[#00a2b7]  rounded-xl p-5 max-md:w-[100%] group hover:bg-[#00a2b7] hover:text-[#fff] hover:translate-y-[-20px] transition duration-300 hover:shadow-xl'>
            <FaMoneyBillTrendUp  className='w-[100%] text-[40px] text-[#00a2b7] group-hover:text-[#fff]' />
            <h1 className='font-bold my-[20px]'>Kreditlar va ipoteka</h1>
            <p>Bizning moslashuvchan kredit va ipoteka imkoniyatlari bilan orzularingizni ro'yobga chiqaring. Shaxsiy kreditlardan tortib, uy-joy ipotekasigacha, bizning tajribali kredit mutaxassislarimiz sizga ariza berish jarayoni bo'yicha yo'l-yo'riq ko'rsatish va kerakli mablag'larni ta'minlashda yordam berish uchun shu yerda.</p>
          </div>
        </div>
   </div>
  )
}

export default App
