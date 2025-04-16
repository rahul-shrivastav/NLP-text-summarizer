import React, { useState } from 'react'
import { FaCopy } from "react-icons/fa";
// import logo from '/logo.png';

const Inputpanel = ({ mode, setmode }) => {
    const [loading, setloading] = useState(false);
    const [boxOpen, setboxopen] = useState(false);
    const [sumarizedText, setSumarizedText] = useState(null);

    const [file, setFile] = useState(null);
    console.log(file)
    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        if (selectedFile && selectedFile.type === "application/pdf") {
            setFile(selectedFile);
            console.log('File uploaded:', selectedFile.name);
        } else {
            alert('Please select a valid PDF file');
        }
    };
    const triggerFileInput = () => {
        document.getElementById('pdfInput').click();
    };

  return (
      <div className={'w-[85%] h-[90%]  flex text-black bg-w gap-4 transition-all'}>
          <div className="w-1/2 duration-1000 h-full shadow-2xl rounded-md  flex flex-col relative bg-white border border-slate-300">
              <div className=" mt-5 ml-5  ">
                  <button onClick={() => setmode('text')} className={mode === 'pdf' ? 'bg-blue-50  text-blue-400 hover:cursor-pointer px-5 py-1 font-semibold rounded-sm ' : 'bg-blue-800  text-white hover:cursor-pointer px-5 py-1 font-semibold rounded-sm '}>Text</button>
                  <button onClick={() => setmode('pdf')} className={mode === 'text' ? 'bg-blue-50  text-blue-400 hover:cursor-pointer px-5 py-1 font-semibold rounded-sm ' : 'bg-blue-800  text-white hover:cursor-pointer px-5 py-1 font-semibold rounded-sm '}>PDF</button>
              </div>
              {
                  (mode === 'text') && <div className=" flex-1  p-3">
                      <span className=" absolute top-1/2 text-gray-400 w-full text-center text-sm">Paste your text here...</span>
                      <textarea autoFocus className='text-sm pt-3 border border-dashed border-slate-400 w-full h-[90%]  pl-5 focus:outline-none  focus:border-nonee focus:ring-0' name="" id=""></textarea>
                  </div>
              }
              {
                  (mode === 'pdf') && <div className=" flex-1  p-3">
                      <input
                          type="file"
                          id="pdfInput"
                          accept=".pdf"
                          style={{ display: 'none' }}
                          onChange={handleFileChange}
                      />
                      <button onClick={triggerFileInput} className="hover:cursor-pointer absolute top-1/2 text-gray-400 w-full text-center text-sm">{file ? file.name : "Click to upload PDF..."}</button>
                      <button onClick={triggerFileInput} autoFocus className='text-sm bg-gray-50 pt-3 border border-dashed border-slate-400 w-full h-[90%]  pl-5 focus:outline-none  focus:border-nonee focus:ring-0 hover:cursor-pointer' name="" id=""></button>
                  </div>

              }


              <div className="hover:scale-105 transition-all  bg-gradient-to-r from-blue-400 right-7 absolute  to-blue-800 p-1 rounded-md bottom-3 w-fit h-fit">
                  <button onClick={() => setloading(!loading)} className=' hover:cursor-pointer hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-800 hover:text-white  text-blue-500 font-bold  px-3 py-1 rounded-sm bg-white '>Summarize</button>
              </div>
          </div>
          <div className={"w-1/2 transition-all overflow-clip duration-500 border relative pb-10 border-slate-300 h-full shadow-2xl rounded-md bg-white p-5 flex flex-col"}>
              <div className="text-md text-blue-500 font-bold  text-center p-5  flex items-center justify-center ">Summarized text  </div>
              <div className="text-sm font-extralight overflow-y-scroll  text-black h-[90%]  text-center p-3   border-dotted border border-slate-500">
                  {sumarizedText}
              </div>
              <button className=" text-xl text-gray-700 absolute bottom-3 right-3 hover:cursor-pointer">
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