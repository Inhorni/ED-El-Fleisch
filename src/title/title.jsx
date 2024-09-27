import React from "react";

function Title({ title, label }) {
  return (
    <div className="relative flex flex-col gap-4 text-white">
      <p className="py-2 px-8 self-start uppercase text-sm font-medium border border-orange-600 rounded-[30px]">
        {label}
      </p>
      <h2 className="font-bold text-red-600 text-2xl md:text-4xl">{title}</h2>
      <span>
        <hr className="w-20 border-2 border-orange-600 rounded-lg " />
      </span>
    </div>
  );
}

export default Title;
