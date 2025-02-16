import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../Firebase';
import { signOut } from 'firebase/auth';
function DashBoard() {
  const navigate = useNavigate();
  const localAuth = JSON.parse(localStorage.getItem('ieee-auth'));
  useEffect(() => {
    if (!(auth.currentUser && localAuth)) {
      navigate('/login')
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const handleLogout = () => {
    const yes = window.confirm("Are You To Sure Logout?")
    if (yes) {
      if (auth.currentUser && localAuth) {
        localStorage.removeItem('ieee-auth')
        signOut(auth)
          .then(() => {
            navigate('/login')
          })
          .catch((err) => { console.log(err) })
      } else {
        alert("already logout")
      }
    }
  }
  return (
    <>
      <div className='dark:bg-[#181F2A] text-gray-400'>
        <div className='mx-5 py-5'>
          <h1 className='text-3xl text-center font-medium'> <span className='text-amber-600'>Dash</span>Board</h1>
          <hr />
        </div>
        <div className='md:flex'>
          <div>
            <img src="study.png" alt="dashboard-img" loading='lazy' />
          </div>
          <div className="flex-grow p-6 overflow-auto bg-g">
            <div className="grid grid-cols-3 gap-6">
              <div className="">
                <Link to="/list-event">
                  <button className='tailwind-btn dark:border-gray-300 h-24 col-span-1 shadow w-full font-serif'>Add New Event</button>
                </Link>
              </div>
              <div className="">
                <Link to="/upload-certificate" >
                  <button className='tailwind-btn dark:border-gray-300 h-24 col-span-1 shadow w-full font-serif'>Upload Certificate</button>
                </Link>
              </div>
              <div className="">
                <Link to="/add-excom">
                  <button className='tailwind-btn dark:border-gray-300 h-24 col-span-1 shadow w-full font-serif'>Add ExCom</button>
                </Link>
              </div>
              <div className="">
                <Link to="/upload-gallery">
                  <button className='tailwind-btn dark:border-gray-300 h-24 col-span-2 shadow w-full font-serif'>Upload Images</button>
                </Link>
              </div>
              <div className="">
                <button className='tailwind-btn h-24 col-span-1 shadow w-full font-serif' onClick={handleLogout}>Logout Admin</button>
              </div>
              <div className="h-24 col-span-1 bg-amber-600 border border-amber-300"></div>
              <div className="h-24 col-span-2 bg-amber-600 border border-amber-300"></div>
              <div className="h-24 col-span-1 bg-amber-600 border border-amber-300"></div>
              <div className="h-24 col-span-3 bg-amber-600 border border-amber-300"></div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default DashBoard