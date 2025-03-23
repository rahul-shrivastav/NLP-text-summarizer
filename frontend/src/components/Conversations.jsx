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
    <div className='w-screen h-[77%]  bg-transparent sm:text-sm text-[10px]'>
      <div id='element' className='transition-all scroll-smooth pb-10 w-[55%] shadow-xl border border-slate-200 h-full m-auto max-[700px]:w-[90%] bg-gray-50 rounded-md overflow-y-scroll thin-scrollbar'>

        {
          allchat.map((chat, index) => {
            if (index != allchat.length - 1) {
              return (
                <div key={index} className='p-4 m-2 text-black w-fit max-w-[70%] rounded-3xl rounded-tl-none bg-slate-200'>
                  {chat}

                </div>
              )
            } else {
              return (
                <div key={index} className='p-4 relative max-sm:ml-5  mt-5 ml-9 text-black w-fit max-w-[70%] rounded-3xl rounded-tl-none bg-slate-200'>
                  <Typewriter text={chat} speed={1} />
                  <img className=' max-sm:scale-60 max-sm:-left-6   absolute top-2 -left-8 animate-bounce' src='/bot.png' width={25} />
                  <button className=' max-sm:text-sm cursor-pointer absolute bottom-0 -right-5  text-right flex items-center justify-end'><MdOutlineContentCopy /></button>
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