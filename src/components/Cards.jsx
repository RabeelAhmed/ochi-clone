import React from "react";

export default function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex items-center px-32 gap-5">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative w-full flex items-center justify-center h-[50vh] bg-[#004D43] rounded-xl">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <div className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">
            &copy; 2019
          </div>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card flex items-center justify-center relative w-1/2 h-[50vh] bg-[#192826] rounded-xl">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <div className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">
            &copy; 2019
          </div>
        </div>
        <div className="card flex items-center justify-center relative w-1/2 h-[50vh] bg-[#192826] rounded-xl relative ">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <div className="absolute left-10 bottom-10 px-5 py-1 border-2 rounded-full">
            &copy; 2019
          </div>
        </div>
      </div>
    </div>
  );
}
