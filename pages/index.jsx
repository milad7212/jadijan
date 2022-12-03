import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-ciBackBeauty p-2">
      <div className="flex justify-end flex-col items-end">
        <Image
          src="/images/jadi.png"
          width={500}
          height={500}
          className="rounded-xl"
        />
        <button className="py-4 px-2 bg-ciGreen rounded-lg font-black">
          {" "}
          من به یادتم هنوز...
        </button>
      </div>

      <p className=" my-2 text-gray-50 font-bold">
        درسی که از جادی یادم گرفتم :
      </p>
      <textarea
        className="w-full rounded-lg shadow-md outline-none  p-3"
        placeholder="...درسی که از جادی یاد گرفتم"
        name=""
        id=""
        cols="5"
        rows="5"
      ></textarea>
    </div>
  );
}
