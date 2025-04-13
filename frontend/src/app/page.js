'use client'
import Navbar from '../components/Navbar'
import Inputbox from '../components/Inputbox'
import Conversations from '../components/Conversations'
import { useState } from 'react';
import Inputpanel from '@/components/Inputpanel';



export default function Home() {
  const [filename, setfilename] = useState(null);
  const [qid, setqid] = useState(null);
  const [extractedtext, setextractedtext] = useState(null);
  const [allchat, setallchat] = useState(['Hello there! How can I help you today?']);

  return (
    <>
      <div className=" w-vh h-svh flex flex-col bg-gray-200     ">
        <div className='border h-[100px] text-white flex items-center justify-center'>
          <p className="text-5xl font-semibold bg-gradient-to-r from-blue-400 to-blue-800 bg-clip-text text-transparent">
            AI Text Summarizer
          </p>
        </div>

        <div className=' border  flex-1 flex items-center justify-center'>
          <Inputpanel />
        </div>


      </div>




    </>
  )
}
