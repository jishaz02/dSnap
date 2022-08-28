import React from "react";

const EditNameScreen = () => {
  return (
    <div>
      <div
        className="flex items-center border-b p-2 w-screen cursor-pointer"
        onClick={() => window.history.back()}
      >
        <img
          src="https://img.icons8.com/ios-filled/50/388E3C/less-than.png"
          alt="Arrow"
          className="h-4 "
        />
        <p className=" text-green-700 font-bold ">Display Name</p>
      </div>
      <p className=" m-2">
        This is how you appear on Snapchat, so pick a name your friends know you
        by.
      </p>
      <input
        type="text"
        name="Jisha Cheriyan"
        className="w-full border-b-2 p-2 focus:outline-none"
      />
      <p className=" text-blue-700 flex justify-center">Remove name</p>
    </div>
  );
};

export default EditNameScreen;
