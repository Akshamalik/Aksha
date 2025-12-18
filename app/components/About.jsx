import { assets, infoList } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id='about' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>Introduction</h4>
        <h2 className='text-center text-5xl font-Ovo'>About Me</h2>

        <div className='flex w-full flex-col lg:flex-row items-center gap-20 my-20'>
            <div className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
            </div>
            <div className='flex-1 '>
            <p className='mb-10 max-w-2xl font-Ovo'>
                Full-stack & Microsoft Dynamics 365 developer with experience in building real-time business applications, Power Platform customizations, C# plugins, and full-stack web development using ReactJS,NextJS, Node.js, and MongoDB. Strong foundation in D365 customization (Power Pages, Plugins, Web APIs, Ribbon Workbench), automation (Power Automate), and modern front-end frameworks. Skilled problem-solver with 200+ LeetCode questions and hands-on industry experience.
            </p>

            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                {infoList.map(({icon,iconDark,title,description},index)=>(
                    <li className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer' key={index}>
                        <Image className='w-7 ,t-3' src={icon} alt={title}/> 
                        <h3 className='my-4 font-semibold text-gray-700'>{title}</h3> 
                        <p className='text-gray-600 text-sm'>{description}</p>
                    </li>
                ))}
            </ul>

            </div>
        </div>
    </div>
  )
}

export default About