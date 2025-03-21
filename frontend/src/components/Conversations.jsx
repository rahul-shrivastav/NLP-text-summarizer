'use client'
import React, { useEffect, useState } from 'react'
import Typewriter from './Typewriter'
import { MdOutlineContentCopy } from "react-icons/md";


const Conversations = ({ allchat }) => {

  useEffect(() => {
    const el = document.getElementById('element');

    let previousHeight = el.scrollHeight;

    const observer = new MutationObserver(() => {
      const currentHeight = el.scrollHeight;

      if (currentHeight > previousHeight) {
        el.scrollTop = currentHeight;
        previousHeight = currentHeight;
      }
    });

    observer.observe(el, { childList: true, subtree: true, characterData: true });
  }, []);

  return (
    <div className='w-screen  absolute top-20 h-[77%] bg-transparent '>
      <div id='element' className='transition-all scroll-smooth pb-10 w-[60%] border border-slate-200 h-full m-auto max-[700px]:w-[90%] bg-gray-50 rounded-md overflow-y-scroll thin-scrollbar'>

        {
          allchat.map((chat, index) => {
            if (index != allchat.length - 1) {
              return (
                <div key={index} className='p-3 m-2 text-black w-fit max-w-[70%] rounded-md bg-slate-200'>
                  {chat}
                </div>
              )
            } else {
              return (
                <div key={index} className='p-3 relative mt-10 ml-3 text-black w-fit max-w-[70%] rounded-md bg-slate-200'>
                  <Typewriter text={chat} speed={1} />
                  <img className='absolute -top-7 animate-bounce' src='/bot.png' width={25} />
                  <button className='cursor-pointer absolute bottom-0 -right-5  text-right flex items-center justify-end'><MdOutlineContentCopy /></button>
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