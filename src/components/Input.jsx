import React from 'react'
import vdo from "../data/6006249_Person_People_1280x720.mp4"
function Input() {
  return (
   <>
    <div className="input">
    <video
    className="absolute top-100 left-0 w-full h-84 object-cover px-10"
    autoPlay
    loop
    muted
  >
    <source src={vdo} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
    </div>
   </>
  )
}

export default Input;
