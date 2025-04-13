'use client'
import Navbar from '../components/Navbar'
import Inputbox from '../components/Inputbox'
import Conversations from '../components/Conversations'
import { useState } from 'react';
import Inputpanel from '@/components/Inputpanel';



export default function Home() {

  const [mode, setmode] = useState('text')
  console.log(mode)
  return (
    <>
      <div className=" w-vh h-svh flex flex-col  bg-gray-50 bg-gradient-to-br from-gray-200 via-white to-gray-300    ">
        <div className=' h-[100px] text-white flex flex-col borderr border-black items-center justify-end'>
          <p className="text-5xl font-semibold bg-gradient-to-l from-blue-400 to-blue-800 bg-clip-text text-transparent">
            AI Text Summarizer
          </p>
        </div>

        <div className='   flex-1 flex items-center justify-center'>
          <Inputpanel mode={mode} setmode={setmode} />
        </div>


      </div>




    </>
  )
}
