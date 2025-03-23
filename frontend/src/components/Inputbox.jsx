'use client'

import React from 'react'
import { IoMdSend } from "react-icons/io";

const Inputbox = ({ qid, extractedtext, setallchat }) => {

  const handleSubmit = async (e) => {
    e.preventDefault();
    document.getElementById('inputq').value = '';
    // login(username, password);
  }
  const sendquerry = async () =>{
    setallchat((prev) => [...prev, document.getElementById('inputq').value]);

  }
  return (
    <div className='w-full   bg-transparent mb-8 '>
      <div className="w-[60%] max-[700px]:w-[90%]  m-auto shadow-xl bg-white border-t border-r border-l border-slate-200 flex p-2 rounded-md">
        <form action="" onSubmit={handleSubmit} className='w-full h-full flex'>
          <input id='inputq' className=' w-full outline-none p-1 text-black' placeholder='Send Message ...' type="text" />
          <button onClick={sendquerry} className='cursor-pointer p-1 text-xl text-gray-700 hover:scale-105'><IoMdSend /></button>
        </form>
        </div>
    </div>
  )
}

export default Inputbox