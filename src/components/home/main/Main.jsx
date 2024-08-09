import React, {useState} from 'react'
// img
import img1 from '../../../assets/ImkonBankImg.jpg'
import img2 from '../../../assets/ImkonBank2.jpg'
import Coin from '../../../assets/coin.avif'
// icons
import { FaAngleDown } from "react-icons/fa6";
// motion
import { motion } from 'framer-motion';

const Main = () => {
  const [rotateIcon, setRotateIcon] = useState(false);
  const ClickRotateIcon = () => {
    setRotateIcon(!rotateIcon);
  };
  return (
    <div className='mx-[50px] max-xl:mx-[25px] mt-[20vh] '>
      
        <div className="bgGrowth">
          <motion.h1 animate={{x:-260}} whileInView={{x:0}} transition={{delay:0.3}}>
            <h1 className='text-[48px] text-[#00a2b7] max-md:text-4xl max-sm:text-3xl'>Missiya va Vizyon</h1>
          </motion.h1>
          <div className=''>
            <motion.h2 animate={{x:-280}} whileInView={{x:0}} transition={{delay:0.3}}>
              <h2 className='text-gray-500 font-bold my-[5px] mt-[5vh] max-xl:text-[14px] max-md:text-[10px]'>Biz innovatsiyalar, halollik va inklyuzivlik asosida sanoatning yetakchi kuchi bo‘lishni, mijozlar va jamiyat rivojlanishiga qat’iy sodiqlikni saqlab, 
              </h2>
            </motion.h2>
            <motion.h2 animate={{x:-280}} whileInView={{x:0}} transition={{delay:0.4}}>
              <h2 className='text-gray-500 font-bold mb-[25vh] max-xl:text-[14px] max-md:text-[10px]'>jismoniy shaxslar va korxonalar uchun yorqinroq moliyaviy kelajak yaratishni tasavvur qilamiz.</h2>
            </motion.h2>
            </div>
        </div>

      <div>

        <div className=' flex justify-between items-center mb-[15vh] max-lg:flex-col max-lg:gap-5'>
            <motion.image animate={{x:-180}} whileInView={{x:0}} transition={{delay:0.7}}>
              <img src={img1} alt="" className='w-[700px] h-[630px] rounded-[3vh] max-xl:w-[500px] max-xl:h-[430px]'/>
            </motion.image>
            <motion.div animate={{y:180}} whileInView={{y:0}} transition={{delay:0.5}}>
              <div className='h-[35vh] w-[2.5px]  bg-[#00a2b7] max-lg:hidden'></div>
            </motion.div>
            <div>
                <motion.h1 animate={{x:160}} whileInView={{x:0}} transition={{delay:0.3}}>
                  <h1 className='text-[40px] text-[#78c2cd98]'>Missiyamiz</h1>
                </motion.h1>
                <motion.h2 animate={{x:160}} whileInView={{x:0}} transition={{delay:0.6}}>
                  <h2 className='w-[42.5vw] mt-[5vh] text-sm max-xl:text-[10px] max-lg:w-auto'>YourBank-da bizning vazifamiz mijozlarimizga moliyaviy muvaffaqiyatga erishish uchun imkoniyatlar berishdir. Biz ularning noyob ehtiyojlarini qondiradiga innovatsion bank yechimlarini taqdim etishga bag'ishlanganmiz. Shaxsiylashtirilgan xizmatlar, ekspert ko'rsatmalari va 
                  ilg'or texnologiyalar orqali biz mijozlarimiz bilan mustahkam va uzoq muddatli munosabatlar o'rnatishni maqsad qilganmiz. Bizning vazifamiz ularning ishonchli hamkori bo'lish, ularga moliyaviy yo'llarini boshqarish va orzularini ro'yobga chiqarishda yordam berishdir.
                  </h2>
                </motion.h2>
            </div>
        </div>

        <div className='flex justify-between items-center translate-y-[-23vh] max-lg:translate-y-[5vh] gap-5 max-sm:flex-col'>
            <div className=''>
                <motion.h1 animate={{x:-160}} whileInView={{x:0}} transition={{delay:0.3}}>
                  <h1 className='text-[40px] text-[#78c2cd98] max-lg:text-[30px]'>Maqsadimiz</h1>
                </motion.h1>
                <motion.h2 animate={{y:160}} whileInView={{y:0}} transition={{delay:0.5}}>
                  <h2 className='w-[60vw] text-sm  max-xl:text-[10px] max-xl:w-auto'>YourBankdagi bizning maqsadimiz mijozlarimiz uchun uzluksiz va moslashtirilgan tajriba yaratish orqali bank faoliyatini qayta aniqlashdan iborat. Biz bank ishi ochiq, shaffof va individual imtiyozlarga moslashtirilgan kelajakni tasavvur qilamiz. <span className='max-md:hidden'>Doimiy innovatsiyalar va hamkorlik orqali biz mijozlarga yo'naltirilgan bank xizmatlari uchun yangi standartlarni o'rnatib, sanoatning oldingi saflarida bo'lishga intilamiz. Bizning maqsadimiz mukammallik, ishonch va mijozlar ehtiyojini qondirishga sodiqligimiz bilan tanilgan afzal qilingan moliyaviy institut bo'lishdir.</span>
                  </h2>
                </motion.h2>
            </div>
            <motion.div animate={{y:-150}} whileInView={{y:0}} transition={{delay:0.6}}>
              <div className='h-[35vh] w-[3px] max-xl:w-[10px] bg-[#00a2b7] max-md:h-[25vh] max-sm:hidden'></div>
            </motion.div>

            <motion.image animate={{y:-150,x:100}} whileInView={{y:0,x:0}} transition={{delay:0.6}}>
              <img src={Coin} alt="" className='mr-[50px] rounded-[3vh] max-xl:mr-[-10px] max-xl:w-[300px] max-md:w-[150px]'/>
            </motion.image>
        </div>
      </div>

      <motion.div animate={{y:-150}} whileInView={{y:0}} transition={{delay:0.8}}>
        <div className="mt-[15vh] ">
          <img src={img2} alt="" className='rounded-[3vh] w-full'/>
        </div>
      </motion.div>
      <div>
        <motion.h1 animate={{x:250}} whileInView={{x:0}} transition={{delay:0.8}}>
          <h1 className='text-[48px] text-[#00a2b7] mt-[15vh] mb-[1vh] max-md:text-3xl'>Tez-tez <span className='text-gray-600'>so'raladigan savollar</span></h1>
        </motion.h1>
        <motion.h2 animate={{y:50}} whileInView={{y:0}} transition={{delay:0.8}}>
          <h2 className='text-gray-500 font-bold mb-[15vh] max-md:text-sm'>Hali ham savollaringiz bormi? Support@imkonbank.com orqali jamoamiz bilan bog'laning</h2>
        </motion.h2>
      </div>
      <div className='  border-[#00a2b7]'>
      <div className='flex gap-[15px] max-md:flex-col'>
        <div className='px-[50px] py-[50px] rounded-[4vh] border-[2px] border-[#00a2b7]  w-full'>
      <motion.div animate={{y:50}} whileInView={{y:0}} transition={{delay:0.5}}>
            <div className='w-full'>
              <h1 className='text-[20px] font-bold max-lg:text-[16px]'>Sizning bankingizda qanday qilib hisob ochsam bo'ladi?</h1>
              <div className='w-full h-[2.5px] bg-[#78c2cd98] my-[3vh]'></div>
              <h2 className='text-[18px] max-lg:text-sm'>YourBank bilan hisob ochish juda oson. Shunchaki bizning veb-saytimizga tashrif buyuring va "Hisob ochish" tugmasini bosing. Ko'rsatmalarga rioya qiling, kerakli ma'lumotlarni taqdim eting va ariza berish jarayonini yakunlang. Agar sizda biron bir savol bo'lsa yoki yordamga muhtoj bo'lsangiz, mijozlarni qo'llab-quvvatlash guruhimiz yordam berishga tayyor.
              </h2>
            </div>
      </motion.div>
          </div>

        <div className='px-[50px] py-[50px] rounded-[4vh] border-[2px] border-[#00a2b7]  w-full'>
          <motion.div animate={{x:50}} whileInView={{x:0}} transition={{delay:0.7}}>
            <div className='w-full'>
              <h1 className='text-[20px] font-bold max-lg:text-[16px] '>Kredit olish uchun qanday hujjatlarni taqdim etishim kerak?</h1>
              <div className='w-full h-[2.5px] bg-[#78c2cd98] my-[3vh]'></div>
              <h2 className='text-[18px] max-lg:text-sm'>Kredit olish uchun talab qilinadigan hujjatlar siz murojaat qilayotgan kredit turiga qarab farq qilishi mumkin. Umuman olganda, siz shaxsni tasdiqlovchi hujjatlar (masalan, pasport yoki haydovchilik guvohnomasi), daromadni tasdiqlovchi hujjat (masalan, toʻlovlar yoki soliq deklaratsiyasi) va garov toʻgʻrisidagi maʼlumotlarni (agar mavjud boʻlsa) taqdim etishingiz kerak boʻladi. Bizning kredit mutaxassislarimiz ariza topshirish jarayonida sizga aniq talablar bo'yicha yo'l-yo'riq ko'rsatadilar.
              </h2>
            </div>
          </motion.div>
        </div>
      </div>

        <motion.div animate={ rotateIcon ? {y:0} : {y:-500}} initial={ rotateIcon ? {y:0} : {y:500}}>
          <div>
            { rotateIcon ? (
              <div className='flex gap-[15px] mt-[15px] max-md:flex-col'>
                <div className='px-[50px] py-[50px] rounded-[4vh] border-[2px] border-[#00a2b7]  w-full '>
          <motion.div animate={{x:50,y:50}} whileInView={{x:0,y:0}} transition={{delay:0.5}}>
            <div className='w-full'>
              <h1 className='text-[20px] font-bold max-lg:text-[16px]'>Qanday qilib onlayn hisoblarimga kirishim mumkin?
              </h1>
              <div className='w-full h-[2.5px] bg-[#78c2cd98] my-[3vh]'></div>
              <h2 className='text-[18px] text-gray-500 max-lg:text-sm '>Hisobingizga onlayn kirish oson va xavfsiz. Bizning veb-saytimizga tashrif buyuring va "Kirish" tugmasini bosing. Hisobingizga kirish uchun foydalanuvchi nomingiz va parolingizni kiriting. Agar siz onlayn-banking xizmatida ro'yxatdan o'tmagan bo'lsangiz, "Hozir ro'yxatdan o'tish" tugmasini bosing va ro'yxatdan o'tish jarayonini bajaring. Agar sizga yordam kerak bo'lsa, bizning mijozlarni qo'llab-quvvatlash guruhimiz sizga yordam berishga tayyor.
              </h2>
            </div>
          </motion.div>
        </div>

        <div className='px-[50px] py-[50px] rounded-[4vh] border-[2px] border-[#00a2b7]  w-full '>
          <motion.div animate={{x:-40,y:-40}} whileInView={{x:0,y:0}} transition={{delay:0.7}}>
            <div className='w-full'>
              <h1 className='text-[20px] font-bold max-lg:text-[16px]'>Mening <span className='max-lg:hidden'>tranzaktsiyalarim va</span> shaxsiy ma'lumotlarim xavfsizmi?</h1>
              <div className='w-full h-[2.5px] bg-[#78c2cd98] my-[3vh]'></div>
              <h2 className='text-[18px] text-gray-500 max-lg:text-sm'>Sizning Bankingizda biz sizning tranzaktsiyalaringiz va shaxsiy ma'lumotlaringiz xavfsizligini birinchi o'ringa qo'yamiz. Maʼlumotlaringiz himoyalanganligini taʼminlash uchun biz sohada yetakchi shifrlash va koʻp faktorli autentifikatsiyadan foydalanamiz. Bundan tashqari, biz paydo bo'ladigan tahdidlarga qarshi turish uchun xavfsizlik choralarimizni muntazam yangilab turamiz. Bizda ishonchli xavfsizlik tizimlari mavjudligini bilib turib, bankka ishonch bilan murojaat qilishingiz mumkin.
              </h2>
            </div>
          </motion.div>
        </div>
              </div>
            ) : (
              <div className=''>
                <div className='px-[50px] py-[50px] rounded-[4vh] border-[2px] border-[#00a2b7]  w-full hidden'>
              <div className='w-full'>
                <h1 className='text-[20px] font-bold '>Sizning bankingizda qanday qilib hisob ochsam bo'ladi?</h1>
                <div className='w-full h-[2.5px] bg-[#78c2cd98] my-[3vh]'></div>
                <h2 className='text-[18px] max-lg:text-sm'>YourBank bilan hisob ochish juda oson. Shunchaki bizning veb-saytimizga tashrif buyuring va "Hisob ochish" tugmasini bosing. Ko'rsatmalarga rioya qiling, kerakli ma'lumotlarni taqdim eting va ariza berish jarayonini yakunlang. Agar sizda biron bir savol bo'lsa yoki yordamga muhtoj bo'lsangiz, mijozlarni qo'llab-quvvatlash guruhimiz yordam berishga tayyor.
                </h2>
              </div>
            </div>
    
            <div className='px-[50px] py-[50px] rounded-[4vh] border-[2px] border-[#00a2b7]  w-full hidden'>
              <div className='w-full'>
                <h1 className='text-[20px] font-bold max-lg:text-lg'>Sizning bankingizda qanday qilib hisob ochsam bo'ladi?</h1>
                <div className='w-full h-[2.5px] bg-[#78c2cd98] my-[3vh]'></div>
                <h2 className='text-[18px] max-lg:text-sm'>YourBank bilan hisob ochish juda oson. Shunchaki bizning veb-saytimizga tashrif buyuring va "Hisob ochish" tugmasini bosing. Ko'rsatmalarga rioya qiling, kerakli ma'lumotlarni taqdim eting va ariza berish jarayonini yakunlang. Agar sizda biron bir savol bo'lsa yoki yordamga muhtoj bo'lsangiz, mijozlarni qo'llab-quvvatlash guruhimiz yordam berishga tayyor.
                </h2>
              </div>
            </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
        <motion.div >
          <div  className=' items-center w-full mb-[10vh]'>
            <button onClick={ClickRotateIcon} className='flex items-center gap-3 mt-[3vh] h-[7vh] px-[10px] mx-auto rounded-[9px] text-white text-xl bg-[#00a2b7] '>Davomi <motion.div animate={ rotateIcon ? {rotate:180} : {rotate:0}}>
              <div>
                <FaAngleDown/>
              </div>
            </motion.div>
               </button>
          </div>
        </motion.div>
    </div>
  );
};

export default Main
