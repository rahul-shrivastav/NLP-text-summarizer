import React, { useEffect, useRef, useState } from 'react'
import { FaCopy } from "react-icons/fa";
import Typewriter from './Typewriter';

const Inputpanel = ({ mode, setmode }) => {
    const [loading, setLoading] = useState(false);
    const [sumarizedText, setSumarizedText] = useState('');
    const fileInputRef = useRef();
    const [filename, setFile] = useState(null);
    const [lenghtExceeded, setExceeded] = useState(false);
    const [inputText, setinputtext] = useState('');
    const [pdfLoading, setpdfLoading] = useState(false);

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    const handleUpload = async (e) => {
        const file = e.target.files[0];
        const fileSizeMB = file.size / (1024 * 1024);
        if (file && fileSizeMB > 1) {
            alert(`File is too large. Max size is 1 MB.`);
            document.getElementsByTagName('textarea').value = '';
            return;
        }
        if (!file) return;
        setFile(file.name)
        setpdfLoading(true);
        setmode('text')

        const arrayBuffer = await file.arrayBuffer();
        const base64 = btoa(
            new Uint8Array(arrayBuffer).reduce(
                (acc, byte) => acc + String.fromCharCode(byte),
                ''
            )
        );

        const res = await fetch('/api/extract', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ file: base64 }),
        });

        const data = await res.json();



        setpdfLoading(false);
        if (data.text) {
            setinputtext(data.text);
            document.getElementsByTagName('textarea').value = data.text;
        }
        else {
            alert(data.error || 'Something went wrong with pdf text extraction.');
            document.getElementsByTagName('textarea').value = '';
        };
    };

    const handleChange = (e) => {
        setinputtext(e.target.value);

    };

    useEffect(() => {
        if (inputText.replace(/[^\w\s]/g, '').trim().split(/\s+/).filter(Boolean).length > 60) {
            setExceeded(true);
        } else {
            setExceeded(false)
        }

    }, [inputText])

  return (
      <div className={'w-[85%] h-[90%]  flex text-black bg-w gap-4 transition-all '}>
          <div className="w-1/2 duration-1000 h-full shadow-2xl rounded-md   flex flex-col relative bg-white border border-slate-300">
              <div className=" mt-5 ml-5  ">
                  <button onClick={() => setmode('text')} className={mode === 'pdf' ? 'bg-blue-50  text-blue-400 hover:cursor-pointer px-5 py-1 font-semibold rounded-sm ' : 'bg-blue-800  text-white hover:cursor-pointer px-5 py-1 font-semibold rounded-sm '}>Text</button>
                  <button onClick={() => setmode('pdf')} className={mode === 'text' ? 'bg-blue-50  text-blue-400 hover:cursor-pointer px-5 py-1 font-semibold rounded-sm ' : 'bg-blue-800  text-white hover:cursor-pointer px-5 py-1 font-semibold rounded-sm '}>PDF</button>
              </div>
              {
                  (mode === 'text') && <div className=" flex-1 p-3 ">
                      {/* <div className=""></div> */}
                      <span className={" absolute top-1/2 text-gray-400 w-full text-center text-sm" + (inputText ? ' hidden ' : ' ')}>Paste your text here...</span>
                      <textarea onChange={handleChange} defaultValue={inputText ? inputText : ''} className='z-0 text-sm pt-3 border border-dashed border-slate-400 w-full h-[90%]  pl-5 focus:outline-none  focus:border-nonee focus:ring-0' name="" id="">

                      </textarea>
                  </div>
              }

              {
                  (mode === 'pdf') && <div className=" flex-1  p-3">
                      <input
                          type="file"
                          id="pdfInput"
                          accept=".pdf"
                          style={{ display: 'none' }}
                          onChange={handleUpload}
                          ref={fileInputRef}

                      />
                      <button onClick={handleButtonClick} className="hover:cursor-pointer absolute top-1/2 text-gray-400 w-full text-center text-sm">{filename ? filename : "Click to upload PDF..."}</button>
                      <button onClick={handleButtonClick} autoFocus className='text-sm bg-gray-50 pt-3 border border-dashed border-slate-400 w-full h-[90%]  pl-5 focus:outline-none  focus:border-nonee focus:ring-0 hover:cursor-pointer' name="" id=""></button>
                  </div>

              }

              <span className='absolute left-2 bottom-3 text-sm text-slate-400'>{lenghtExceeded ? 'Text limit exceeded (60 words)' : ''}</span>
              <div className="hover:scale-105   bg-gradient-to-r from-blue-400 right-7 absolute  to-blue-800 p-1 rounded-md bottom-3 w-fit h-fit">
                  <button disabled={pdfLoading ? true : false} onClick={() => { setLoading(!loading); console.log(inputText); setSumarizedText('If youre trying to add ellipsis for multi-line truncation (e.g., only showing 3 lines of text and cutting off after), you can use custom Tailwind plugins (like line-clamp):'.repeat(10)) }} className=' disabled:cursor-not-allowed hover:cursor-pointer hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-800 hover:text-white  text-blue-500 font-bold  px-3 py-1 rounded-sm bg-white '>Summarize</button>
              </div>
          </div>
          <div className={"w-1/2 transition-all overflow-clip duration-500 border relative pb-10 border-slate-300 h-full shadow-2xl rounded-md bg-white p-5 flex flex-col"}>
              {/* <div className="text-md text-blue-500 font-bold  text-center p-2  flex items-center justify-center ">Summarized text  </div> */}

              <div className=" flex items-center justify-center bg-white text-blue-900">
                  <img className='animate-pulse' src='/logo.png' width={45} alt="" />
              </div>

              <div className="text-sm font-extralight overflow-y-scroll flex flex-col items-start justify-start  text-black h-[90%]  text-center p-3   border-dotted border border-slate-500">
                  <div className="w-full text-blue-600 font-bold ">Summary</div>
                  <div className="w-fit flex-1  w-max-[100%] p-2 flex items-start justify-around ">
                      <div className=" w-fit text-left">
                          <Typewriter text={sumarizedText} speed={20} />
                      </div>
                  </div>

              </div>
              <button className=" text-md text-gray-700 absolute bottom-4 right-4 hover:cursor-pointer">
                  <FaCopy />

              </button>

              {loading &&
                  <div className="w-full h-full top-0 left-0 absolute flex items-center justify-center flex-col gap-4 bg-white">
                      <div className="border-t-2 border-blue-500 animate-spin w-10 h-10 rounded-full text-sm "></div>
                      <div className="text-sm text-slate-400">Sumarizing...Please wait</div>
                  </div>
              }
              {!sumarizedText && !loading &&
                  <div className=" w-full h-full top-0 left-0 absolute flex items-center justify-center flex-col gap-4 bg-white">
                      <img className='animate-pulse' src='/logo.png' width={60} alt="" />
                  </div>

              }
          </div>
      </div>
  )
}

export default Inputpanel