'use client'
import React, { useEffect, useState } from 'react'
import Typewriter from './Typewriter'


const Conversations = ({ allchat }) => {

  return (
    <div className='w-screen  absolute top-20 h-[77%] bg-transparent '>
      <div className='w-[80%] border border-slate-200 h-full m-auto max-[700px]:w-[90%] bg-gray-50 rounded-md overflow-y-scroll thin-scrollbar'>

        {
          allchat.map((chat, index) => {
            if (index != allchat.length - 1) {
              return (
                <div key={index} className='p-3 text-black w-fit max-w-[70%] border border-slate-300'>
                  {chat}
                </div>
              )
            } else {
              return (
                <div key={index} className='p-3 text-black w-fit max-w-[70%] border border-slate-900'>
                  <Typewriter text={chat} speed={25} />
                </div>
              )
            }

          })
        }
          
        </div>
    </div>
  )
}

export default Conversations