import React from "react";

function index() {
  return (
    <div className="bg-ciBackBeauty p-3 h-screen">
      <div className="flex justify-center">
        <p className="text-gray-200  font-bold mb-4">دیوار زندان جادی</p>
      </div>
      <div className="flex flex-wrap">
        {
          ([1, 1, 1, 1, 1, 1, 1].map((e,i) => (
            <div key={i} className=" flex relative mx-2">
              <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
              <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
              <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
              <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
              <span className="absolute inset-0 w-9 h-[1px] bg-gray-200 -rotate-[38deg] origin-top-right"></span>
            </div>
          )))
        }
        <div className=" flex relative mx-2">
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="absolute inset-0 w-9 h-[1px] bg-gray-200 -rotate-[38deg] origin-top-right"></span>
        </div>
        <div className=" flex relative mx-2">
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="absolute inset-0 w-9 h-[1px] bg-gray-200 -rotate-[38deg] origin-top-right"></span>
        </div>
        <div className=" flex relative mx-2">
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="absolute inset-0 w-9 h-[1px] bg-gray-200 -rotate-[38deg] origin-top-right"></span>
        </div>
      </div>
    </div>
  );
}

export default index;
