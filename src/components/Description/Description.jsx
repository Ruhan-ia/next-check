import React from "react";
import { images } from "../../../public/data";
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";

const Description = ({activeImgIndex, clickNext, clickPrev}) => {
  return (
    <div className="   bg-[#e7dfd9]  rounded-tr-3xl rounded-br-3xl">
      <h1 className="uppercase text-sm absolute right-4 top-2 underline-offset-4 underline">
        Coffee cafe
      </h1>
      {images.map((ele, idx) => (
        <div
          key={idx}
          className={
            idx === activeImgIndex 
            ?`block w-full h-[80vh] py-20 px-20 fade-in`
            :'hidden'
        }
        >
          <div className="py-16 text-5xl font-extrabold">{ele.title}</div>
          <div className="leading-relaxed font-medium tracking-wide text-base italic h-40 text-gray-600">
            {ele.description}
          </div>
          <button className="text-white uppercase px-4 py-2 my-10 rounded-md bg-[#ecae7e]">Order now</button>
        <div className="flex absolute justify-center items-center bottom-1 ">
            
        <div onClick={clickPrev} className="absolute bottom-2 right-10 cursor-pointer text-sm p-2 text-gray-400 bg-white rounded-full"><MdOutlineArrowBackIos /></div>
        <div onClick={clickNext} className="absolute bottom-2 right-2 cursor-pointer text-sm p-2 text-gray-400 bg-white rounded-full"><MdOutlineArrowForwardIos /></div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Description;
