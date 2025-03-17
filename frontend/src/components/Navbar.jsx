'use client'

import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { BsFiletypePdf } from "react-icons/bs";
import logo from '../../public/logo.png';

const Navbar = ({setextractedtext,setfilename,setqid,filename}) => {

	const handleButtonClick = async () => {

	};
			
	return (
		<div className='absolute top-0 w-screen h-16 shadow-lg flex items-center justify-between bg-white'>
				
				<div className='max-[510px]:scale-75 ml-5 max-[510px]:ml-1 border z-10'>
                    <img width={120} height={100} src={logo}  />
				</div>

				<div className=" flex items-center justify-center gap-3">
						
						{ filename &&
						<div className=" flex items-center justify-center  text-green-600 gap-1 text-xs font-semibold">
								<span className='text-md border border-green-300 text-[17px]  font-bold rounded-sm text-green-700 p-1'><BsFiletypePdf /></span>
								{filename}
						</div>
						}
						<button onClick={handleButtonClick} className='max-[510px]:hidden mx-10 px-10 hover:bg-black font-semibold flex items-center justify-center  gap-2 text-xs border border-black p-2 rounded-md'>
								<span><FaPlusCircle /></span>Upload PDF
						</button>

						<button className='mx-2 hidden hover:bg-slate-100 font-semibold max-[510px]:flex items-center justify-center gap-2 text-xs border border-black p-2 rounded-md'>
								<span><FaPlusCircle /></span>
						</button>

				</div>

		</div>
	)
}

export default Navbar