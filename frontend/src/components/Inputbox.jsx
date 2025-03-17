'use client'

import React from 'react'
import { IoMdSend } from "react-icons/io";

const Inputbox = ({qid,extractedtext}) => {

  const sendquerry = async () =>{

  }
  return (
    <div className='w-full absolute m-auto bottom-10 bg-transparent '>
        <div className="w-[80%] max-[700px]:w-[90%]  m-auto shadow-xl bg-white border-t border-r border-l border-slate-200 flex p-2 rounded-md">
            <input id='inputq' className=' w-full outline-none p-1' placeholder='Send Message ...' type="text" />
            <button onClick={sendquerry} className='p-1 text-xl hover:scale-105'><IoMdSend /></button>
        </div>
    </div>
  )
}

export default Inputbox