import React, { useState, useEffect } from 'react';
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';
import { NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../assets/logo.png';

const Navbar = () => {
  const [burgerIcon, setBurgerIcon] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();
  const token1 = localStorage.getItem('token');
  const username = localStorage.getItem('username')
  const clickBurgerIcon = () => {
    setBurgerIcon(!burgerIcon);
  };

  useEffect(() => {
    if (token1) {
      setIsAuthenticated(true);
    }
  }, [token1]);

  const handleLinkClick = (e) => {
    if (!isAuthenticated) {
      e.preventDefault();
      navigate('/Login', { state: { from: '/Ish' } });
    }
  };

  return (
    <>
      <motion.div animate={{ y: 0 }} initial={{ y: -200 }} transition={{ delay: 0.5 }}>
        <div>
          <div className='px-[7vw] py-[3vh] flex items-center justify-between shadow-md max-lg:px-[5vh] max-md:px-[10px]'>
            <NavLink to="/">
              <div className='z-50'>
                <img src={logo} alt="Logo" className='w-[10vw] max-lg:w-[150px] my-[-2vh]' />
              </div>
            </NavLink>

            <div className='flex gap-10 items-center text-xl max-xl:gap-7 max-lg:hidden'>
              <NavLink to="/"><h1 className='heh hover:text-[#545151a2]'>Bosh sahifa</h1></NavLink>
              <NavLink to="/About"><h1 className='heh hover:text-[#545151a2]'>Biz haqimizda</h1></NavLink>
              <NavLink to="/Ish" onClick={handleLinkClick}><h1 className='heh hover:text-[#545151a2]'>Ishga joylashish</h1></NavLink>
            </div>

            <div className='flex items-center'>
              <div className='flex items-center gap-5 z-50'>
              { isAuthenticated ? (
                <h1 className='max-lg:hidden font-bold mt-2 text-center text-[#00a2b7]'> {username}</h1>  // Display username if authenticated
              ) : (
                <div>
                <NavLink to='/SignUp'>
                    <button className='w-[7vw] h-[7vh] rounded-[9px] max-lg:hidden hover:text-[#0000007f]'>Sign Up</button>
                  </NavLink>
                <NavLink to="/Login">
                  <button className='w-[7vw] h-[7vh] rounded-[9px] text-white text-xl bg-[#00a2b7] max-lg:hidden hover:bg-[#78c2cd98] hover:shadow-lg'>Login</button>
                </NavLink>
                </div>
              )}
              </div>

              <div className='border border-[rgba(0,0,0,.1)] rounded-[1.5vh] ml-[1vh] bg-[#f9f8f6] hidden max-lg:inline'>
                <motion.div
                  animate={burgerIcon ? { rotate: 90, opacity: 1 } : { rotate: 0, opacity: 0.8 }}
                  transition={{ duration: 0.5 }}
                >
                  <div
                    className='py-3 px-3 text-2xl'
                    onClick={clickBurgerIcon}
                  >
                    {burgerIcon ? <IoMdClose /> : <HiOutlineMenuAlt3 />}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
          <motion.div animate={burgerIcon ? { y: 0 } : { y: -1000 }}>
            <div className='absolute bg-white mt-7 w-full pb-[30px] shadow-xl z-40'>
              <motion.button animate={burgerIcon ? { x: 0 } : { x: 1000 }} transition={burgerIcon ? { delay: 0.6 } : { delay: 0 }}>
                <NavLink to="/">
                  <button className='w-[92vw] mx-[15px] bg-[#f9f8f6] py-3 text-xl rounded-[2vh]'>Bosh sahifa</button>
                </NavLink>
              </motion.button>
              <motion.button animate={burgerIcon ? { x: 0 } : { x: -1000 }} transition={burgerIcon ? { delay: 0.8 } : { delay: 0 }}>
                <NavLink to='/About'>
                 <button className='w-[92vw] mx-[15px] bg-[#f9f8f6] py-3 text-xl rounded-[2vh] my-2'>Biz haqimizda</button>
                </NavLink>
              </motion.button>
              <motion.button animate={burgerIcon ? { x: 0 } : { x: 1000 }} transition={burgerIcon ? { delay: 1 } : { delay: 0 }}>
                <NavLink to='/Ish'>
                  <button className='w-[92vw] mx-[15px] bg-[#f9f8f6] py-3 text-xl rounded-[2vh]'>Ishga joylashish</button>
                </NavLink>
              </motion.button>
                { isAuthenticated ? (
              <h1 className='font-bold mt-5 text-center text-[#00a2b7]'>{username}</h1>
                ) : (
              <div className='flex items-center mt-[5vh] mx-[20px] gap-5'>
                  <motion.button animate={burgerIcon ? { x: 0 } : { x: -700 }} transition={burgerIcon ? { delay: 1.4 } : { delay: 0 }} className='w-full'>
                  <NavLink to='/SignUp'>
                    <button className='w-full h-[7vh] rounded-[9px] border border-[#00a2b7] text-xl text-[#00a2b7] max-lg:inline hidden'>Sign Up</button>
                  </NavLink>
                </motion.button>
                <motion.button className='w-full' animate={burgerIcon ? { rotate: 0 } : { rotate: -10 }} transition={burgerIcon ? { delay: 1.7 } : { delay: 0 }}>
                  <NavLink to='/Login'><button className='w-full h-[7vh] rounded-[9px] text-white text-xl bg-[#00a2b7] max-lg:inline hidden'>Login</button></NavLink>
                </motion.button>
              </div>
                )}
            </div>
          </motion.div>
        </div>
      </motion.div>
      
    </>
  );
};

export default Navbar;
