import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
const Navbar = () => {
  return (
      <div className="flex border-2 mt-1 bg-black w-full h-9">
        <p className=" text-white w-full h-9 items-center flex">Home...Mordern web development</p>
        <p className=" flex items-center text-white"><MdOutlineMessage />Feedback</p>
      </div>
  )
}

export default Navbar