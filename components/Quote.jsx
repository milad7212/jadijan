import React from "react";

function Quote({ text = "من یاد گرفتن رو ازش یاد گرفتم...." }) {
  return (
    <div className="max-w-4xl p-4 text-gray-800 bg-white rounded-lg shadow my-2">
      <div className="mb-2">
        <div className="h-3 text-3xl text-right text-gray-600">”</div>
        <p className="px-4 text-sm text-center text-gray-600">{text}</p>
        <div className="h-3 text-3xl text-left text-gray-600">“</div>
      </div>
    
        <p className="text-gray-600 text-xs font-bold ">میلاد حسنی</p>
      
    </div>
  );
}

export default Quote;
