'use client'

import React, { useState } from 'react';
import { FaPlusCircle } from "react-icons/fa";
import { BsFiletypePdf } from "react-icons/bs";
import logo from '../../public/logo.png';

const Navbar = ({setextractedtext,setfilename,setqid,filename}) => {

	const handleButtonClick = async () => {

	};
			
	return (
		<div className=' w-screen max-sm:shadow-lg max-sm:justify-center h-16 max-sm:h-10 bg-white  shadow-sm flex items-center justify-between '>
				
			<div className='max-[510px]:scale-75 ml-5 max-[510px]:ml-1 z-10 max-sm:scale-[0.6]'>
				<img className='transform rotate-12 ' src='/logo.png' width={40} />
				</div>


		</div>
	)
}

export default Navbar