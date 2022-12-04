import React from "react";

function index() {
  return (
    <div className="bg-ciBackBeauty p-3 h-screen">
      <div className="flex justify-center">
        <p className="text-gray-200  font-bold mb-4">دیوار زندان جادی</p>
      </div>
      <div className="flex flex-wrap">
        <ProductionLine />
      </div>
    </div>
  );
}

export default index;

function ProductionLine() {
  // JavaScript program to illustrate
  // calculation of no. of days between two date

  // To set two dates to two variables
  const date1 = new Date("2022/10/05");
  const today = new Date();

  var Difference_In_Time = today.getTime() - date1.getTime();

  var Difference_In_Days = parseInt(Difference_In_Time / (1000 * 3600 * 24));

  const fullLines = parseInt(Difference_In_Days / 5);
  const partLines = Difference_In_Days % 5;

  return (
    <>
      {new Array(fullLines).fill(1).map((e, i) => (
        <div key={i} className=" flex relative mx-2 my-2">
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
          <span className="absolute inset-0 w-9 h-[1px] bg-gray-200 -rotate-[38deg] origin-top-right"></span>
        </div>
      ))}

      {!!partLines && (
        <>
          <div className=" flex relative mx-2 my-2">
            {new Array(partLines).fill(1).map((e, i) => (
              <>
                <span className="h-6 w-[1px] bg-gray-200 mx-[3px]"></span>
              </>
            ))}
          </div>
        </>
      )}
    </>
  );
}
