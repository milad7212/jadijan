import Head from "next/head";
import Image from "next/image";
import { RiHeart3Fill, RiContactsBook2Fill } from "react-icons/ri";
import { GiTeacher, GiBrickWall } from "react-icons/gi";
import {GrSend} from 'react-icons/gr'
import Link from "next/link";
import { useState } from "react";


export default function Home() {
  const [valueTextArea, setValueTextArea] = useState("")
  return (
    <div className="bg-ciBackBeauty p-3 min-h-screen">
      <div className="flex items-center">
        <RiHeart3Fill fontSize={25} className="text-ciRed animate-pulse" />
        <p className="mr-2 text-gray-500">
          <span className="font-bold ml-[2px]">598</span>
          <span className=""> بار </span>
          <span className="text-ciRed font-black mx-1 ">یاد تو</span>
          <span className="">در خاطری آمد.</span>
        </p>
      </div>
      <div className="flex items-center mt-4">
        <GiTeacher fontSize={25} className="text-ciComment " />
        <p className="mr-2 text-gray-500 flex">
          <span className="font-bold ml-[2px]">354</span>
          <span className="block"> درس</span>
          <span className="text-ciComment font-black mx-1">از تو</span>
          <span className="">به جا مانده.</span>
        </p>
      </div>

      <div className="flex  flex-col items-center">
        <div className="relative">
          <Image
            src="/images/jadi.png"
            width={500}
            height={500}
            className="rounded-xl shadow-lg"
            alt="جادی"
          />
          <div className="absolute left-0 top-0 p-2 flex flex-col items-center">
            <Link href="/wall">
              <GiBrickWall
                fontSize={25}
                className="text-ciComment cursor-pointer hover:animate-ping "
              />
            </Link>
            <Link href="/lessons">
            <RiContactsBook2Fill
              fontSize={30}
              className="text-ciComment mt-2 cursor-pointer hover:animate-ping "
            />
            </Link>
          </div>
          <div className="absolute bottom-0">
            <button className="py-4 px-2 bg-ciGreen shadow-lg active:scale-95 duration-200 ease-out hover:bg-ciGreen/50 rounded-lg font-black">
              {" "}
              من به یادتم ...
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-5xl mx-auto p-3">
        <p className=" my-2 text-gray-400 ">درسی که از جادی یاد گرفتم :</p>
        <div className="relative">
          <textarea
            className="w-full rounded-lg shadow-md outline-none placeholder:text-ciComment font-bold  p-3 bg-gray-200 focus-within:border-2 focus-within:ring-4"
            placeholder="درسی که از جادی یاد گرفتم ..."
            value={valueTextArea}
            onChange={(v)=>setValueTextArea(v.target.value)}
            name=""
            id=""
            cols="5"
            rows="5"
          ></textarea>
           {valueTextArea.length>2 && <div className=" absolute left-3 bottom-4">
             <GrSend fontSize={25} className="text-ciRed " />
           </div>}
        </div>
      </div>
    </div>
  );
}
