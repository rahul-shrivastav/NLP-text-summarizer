'use client'

import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { BsFiletypePdf } from "react-icons/bs";
import logo from '../../public/logo.png';

const Navbar = ({setextractedtext,setfilename,setqid,filename}) => {

	const handleButtonClick = async () => {

	};
			
	return (
		<div className='absolute top-0 w-screen h-16 shadow-sm flex items-center justify-between bg-white'>
				
			<div className='max-[510px]:scale-75 ml-5 max-[510px]:ml-1 z-10'>
				<img className='transform rotate-12 ' src='/logo.png' width={40} />
				</div>

				<div className=" flex items-center justify-center gap-3">



				</div>

		</div>
	)
}

export default Navbar