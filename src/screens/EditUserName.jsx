import React from "react";

const EditUserName = () => {
  return (
    <div>
      <div
        className="flex items-center border-b p-2 w-screen cursor-pointer"
        onClick={() => window.history.back()}
      >
        <img
          src="https://img.icons8.com/ios-filled/50/000000/less-than.png"
          alt="Arrow"
          className="h-4 "
        />
        <p className=" font-bold left-0">Username</p>
      </div>
      <p className=" m-2">
        This is how your friends find and add you on Snapchat. You can only
        change your username once a year.
      </p>
      <input
        type="text"
        name="Jisha Cheriyan"
        className="w-full border-b-2 p-2 focus:outline-none"
      />
      <p className=" text-blue-700 flex justify-center">Change Username</p>
    </div>
  );
};

export default EditUserName;
