'use client'
import Navbar from '../components/Navbar'
import Inputbox from '../components/Inputbox'
import Conversations from '../components/Conversations'
import { useState } from 'react';



export default function Home() {
  const [filename, setfilename] = useState(null);
  const [qid, setqid] = useState(null);
  const [extractedtext, setextractedtext] = useState(null);
  console.log(filename, extractedtext, qid)
  return (
    <>
      <div className="w-screen h-screen bg-gray-100">
        <Navbar setfilename={setfilename} setqid={setqid} setextractedtext={setextractedtext} filename={filename} />
        <Conversations />
        <Inputbox qid={qid} extractedtext={extractedtext} />
      </div>
    </>
  )
}
