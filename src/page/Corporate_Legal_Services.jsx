import React from 'react'
import img001 from '../data/img001.avif';
import img002 from '../data/img002.avif';
function Corporate() {
  return (
    <div>
      <div className="h-[45vh] bg-gray-800 text-center flex flex-col items-center">
        <h1 className="text-6xl font-bold text-white py-5">Corporate Legal Services</h1>
        <p className="w-[100vh] text-white text-xl">Expert legal support for business formation, compliance, and intellectual property protection tailored for your needs.</p>
      </div>
      <div className=" text-center flex flex-col items-center">
      <h1 className="text-6xl font-bold text-black py-5">Corporate Legal Services</h1>
      <p className="w-[100vh] text-gray-700 text-xl">Expert legal support for business formation, compliance, and intellectual property protection tailored for your needs.</p>
      <div className="flex flex-row w-[85%] p-10">
        <img src={img001} alt="" className=" px-5 w-[50%] rounded-[5%]"/>
        <img src={img002} alt="" className=" px-5 w-[50%] rounded-[5%]"/>
      </div>
      </div>
    </div>
  )
}

export default Corporate
