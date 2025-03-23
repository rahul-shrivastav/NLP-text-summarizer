'use client'
import Navbar from '../components/Navbar'
import Inputbox from '../components/Inputbox'
import Conversations from '../components/Conversations'
import { useState } from 'react';



export default function Home() {
  const [filename, setfilename] = useState(null);
  const [qid, setqid] = useState(null);
  const [extractedtext, setextractedtext] = useState(null);
  const [allchat, setallchat] = useState(['Hello there! How can I help you today?']);

  return (
    <>
      <div className="w-vh h-svh overflow-clip bg-gray-100 flex flex-col items-center justify-between     ">
        <Navbar setfilename={setfilename} setqid={setqid} setextractedtext={setextractedtext} filename={filename} />
        <Conversations allchat={allchat} />
        <Inputbox qid={qid} extractedtext={extractedtext} setallchat={setallchat} />
      </div>
    </>
  )
}
