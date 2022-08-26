import React from "react";

const HomeScreenListItem = () => {
  return (
    <div className="w-screen h-14 border-b flex items-center p-4 cursor-pointer">
      <div className="h-10 w-10 bg-blue-700 rounded-full mr-2"></div>
      <div className="flex flex-col justify-center">
        <p className="text-lg font-semibold">Jisha</p>
        <div className="flex items-center mb-1">
          <div className=" h-[10px] w-[10px] bg-red-500 rounded-sm mr-1"></div>
          <p className=" text-xs text-red-500 font-bold">New Snap</p>
        </div>
      </div>
    </div>
  );
};

export default HomeScreenListItem;
