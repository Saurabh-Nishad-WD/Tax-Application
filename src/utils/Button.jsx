import React from 'react'

function Button({text,className,h=10,w=10}) {
  return (
    <div className={`flex justify-center items-center ${h} w-${w} bg-blue-700 rounded-full z-40 absolute ${className}`}>
      <a href="https://in.images.search.yahoo.com/search/images;_ylt=AwrPpTp6ZI9n6gEAeZS7HAx.;_ylu=Y29sbwNzZzMEcG9zAzEEdnRpZAMEc2VjA3BpdnM-?p=jhn+wick&fr2=piv-web&type=E210IN885G91852&fr=mcafee" className="text-white font-semibold">{text}</a>
    </div>
  )
}

export default Button
