import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

const IshgaJoy = () => {
  const [test, setTest] = useState(false);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  const ClickTest = () => {
    setTest(!test);
  };

  const fetchPythonData = async (id) => {
    try {
      const response = await fetch(
        `https:sunnatakbarov0104.pythonanywhere.com/api/v1/sciences/${id}/tests/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,  // Corrected the header key from 'Authentification' to 'Authorization'
            "Content-Type": "application/json",
          } 
        }
      );

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem("data", JSON.stringify(data));  // Store the data in localStorage
        navigate('/Python', { replace: true });  // Navigate to the Python page
      } else {
        console.error("Error fetching data:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className='h-[80vh] '>
      <div className='flex justify-center mt-[30vh]'>
        <button onClick={ClickTest} className='py-[20px] px-[60px] bg-[#00a7b2] text-white font-bold text-xl rounded-xl'>
          Test
        </button>
      </div>

      <div>
        {test ? (
          <div className="flex items-center justify-center my-[20px] gap-10">
              <button 
                className='py-[20px] px-[70px] bg-[#00a7b2] text-white font-bold text-xl rounded-xl'
                onClick={() => fetchPythonData(1)}>
                Python
              </button>

            {/* <button 
              className='py-[20px] px-[60px] bg-[#00a7b2] text-white font-bold text-xl rounded-xl'>
              React Js
            </button> */}
          </div>
        ) : (
          <div className="flex items-center justify-center my-[20px] gap-10">
            <button 
              className='py-[20px] px-[60px] bg-[#00a7b2] text-white font-bold text-xl rounded-xl hidden'>
              Python
            </button>
            {/* <button 
              className='py-[20px] px-[60px] bg-[#00a7b2] text-white font-bold text-xl rounded-xl hidden'>
              React Js
            </button> */}
          </div>
        )}
      </div>
    </div>
  );
};

export default IshgaJoy;
