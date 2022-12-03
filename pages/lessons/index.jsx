import React from "react";
import Quote from "../../components/Quote";

function LessonsPage() {
  return (
    <div className="bg-ciBackBeauty p-3 h-screen">
      <div className="flex justify-center">
        <p className="text-gray-200  font-bold ">درس هایی که آموختند از جادی</p>
      </div>
      <div className="flex items-center mt-4  flex-col">
        <Quote />
        <Quote text="من وقتی رانندگی میکردم پادکستهای جادی رو گوش میکردم. بخاطر این موضوع ازش ممنونم"/>
      </div>
    </div>
  );
}

export default LessonsPage;
