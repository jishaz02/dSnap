import React from "react";

const ProfileScreenListItem = ({ title, value }) => {
  return (
    <div>
      <div className="w-screen h-14 border-b flex items-center justify-between p-4 cursor-pointer">
        <p>{title}</p>
        <div className="flex items-center">
          <p>{value}</p>
          <img
            src="https://img.icons8.com/ios-filled/50/1A1A1A/more-than.png"
            alt="Arrow"
            className="h-4"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfileScreenListItem;
