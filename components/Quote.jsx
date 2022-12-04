import React from "react";
import { RiHeart3Fill } from "react-icons/ri";
function Quote({ text = "من یاد گرفتن رو ازش یاد گرفتم...." }) {
  return (
    <div className="max-w-4xl p-4 text-gray-800 bg-white rounded-lg shadow my-2">
      <div className="mb-2">
        <div className="h-3 text-3xl text-right text-gray-600">”</div>
        <p className="px-4 text-sm text-center text-gray-600">{text}</p>
        <div className="h-3 text-3xl text-left text-gray-600">“</div>
      </div>
    <div className="flex justify-between items-center mt-1">
        <p className="text-gray-600 text-xs font-bold ">میلاد حسنی</p>
        <div className="flex items-center">
          <p className="text-xs ml-1 text-ciComment">256</p>
          <RiHeart3Fill fontSize={20} className="text-ciComment cursor-pointer" />
        </div>
    </div>
      
    </div>
  );
}

export default Quote;
