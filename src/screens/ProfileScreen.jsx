import React from "react";
import LogOutBtn from "../components/LogOutBtn";
import ProfileScreenListItem from "../components/ProfileScreenListItem";

const ProfileScreen = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center">
      <ProfileScreenListItem title="Name" value="Jisha Cheriyan" />
      <ProfileScreenListItem title="Username" value="jishaz02" />
      <ProfileScreenListItem title="Birthday" value="2/2/2001" />
      <ProfileScreenListItem title="Email" value="jishacheriyan02@gmail.com" />
      <br />
      <LogOutBtn />
    </div>
  );
};

export default ProfileScreen;
