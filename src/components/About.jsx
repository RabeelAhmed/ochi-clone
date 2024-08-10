import React from "react";

export default function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="text-[4vw] p-10 leading-[4.5vw] tracking-tight">
        Ochi is a strategic presentation agency for forward-thinking businesses
        that need to raise funds, sell products, explain cocplex ideas, and hire
        great people.
      </h1>

      <div className="w-full flex gap-5 pt-10 border-t-[1px] mt-10 border-[#a1b562]">
        <div className="w-1/2 ">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="uppercase flex items-center gap-10 px-12 py-5 mt-10 bg-zinc-900 rounded-full text-white">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full "></div>
          </button>
        </div>

        <div className="w-1/2 h-[70vh] bg-[#b0c859] rounded-3xl"></div>
      </div>
    </div>
  );
}
