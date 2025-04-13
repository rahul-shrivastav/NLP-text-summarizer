import React from 'react'

const Inputpanel = () => {
  return (
    <div className='w-4/5 h-4/5  flex text-black bg-white '>
        <div className="w-1/2 h-full   flex flex-col relative">
            <div className=" m-5  ">
                <button className="hover:cursor-pointer  px-5 py-1 bg-blue-50 rounded-sm text-blue-400 font-semibold">Text</button>
                <button className="hover:cursor-pointer px-5 py-1 font-semibold bg-blue-800 rounded-sm text-white">PDF</button>
            </div>
            <div className=" flex-1  ">
                <span className=" absolute top-1/2 text-gray-400 w-full text-center">Paste your text here...</span>
                <textarea className='w-full h-[90%]  pl-5 focus:outline-none  focus:border-none focus:ring-0'   name="" id=""></textarea>
            </div>
            <div className="hover:scale-105 transition-transform  bg-gradient-to-r from-blue-400 right-10 absolute  to-blue-800 p-1 rounded-md bottom-5 w-fit h-fit">
                <button className=' hover:cursor-pointer hover:bg-gradient-to-r hover:from-blue-400 hover:to-blue-800 hover:text-white  text-blue-500 font-bold  px-3 py-1 rounded-sm bg-white '>Summarize</button>
            </div>
        </div>
        <div className="w-1/2 h-full border border-black ">
        </div>


        
    </div>
  )
}

export default Inputpanel