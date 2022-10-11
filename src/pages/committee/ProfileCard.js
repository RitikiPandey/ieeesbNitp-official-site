import React from 'react'
import {FaInstagram, FaLinkedin } from 'react-icons/fa';
import {SiGmail } from 'react-icons/si';
function ProfileCard({data}) {
    return (
        <>
            <div className="flex flex-col items-center p-8 transition-colors duration-300 transform border-2 cursor-pointer rounded-xl border-amber-500 hover:border-transparent group  hover:shadow-xl dark:border-gray-700 dark:hover:border-transparent">
                <img className="object-cover w-36 h-36 rounded-full ring-2 ring-amber-400 " src={data.imgPath} alt="" />

                <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white group-hover:text-white">{data.name}</h1>

                <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-gray-300">{data.position}</p>

                <div className="flex mt-3 -mx-2">
                    <a href={data.linkedin} target="_blank" rel='noreferrer' className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Reddit">
                        <FaLinkedin className='text-xl'/>
                    </a>

                    <a href={data.insta} target="_blank" rel='noreferrer' className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Facebook">
                        <FaInstagram className='text-xl'/>
                    </a>

                    <a href={`mailto:${data.email}`} target="_blank" rel='noreferrer' className="mx-2 text-gray-600 dark:text-gray-300 hover:text-gray-500 dark:hover:text-gray-300 group-hover:text-white" aria-label="Github">
                       <SiGmail className='text-xl'/>
                    </a>
                </div>
            </div>

        </>
    )
}

export default ProfileCard