import React from "react";
import LogOutBtn from "../components/LogOutBtn";
import ProfileScreenListItem from "../components/ProfileScreenListItem";

const ProfileScreen = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-start items-center">
      <ProfileScreenListItem
        title="Name"
        value="Jisha Cheriyan"
        path="/edit/name"
      />
      <ProfileScreenListItem
        title="Username"
        value="jishaz02"
        path="/edit/username"
      />
      <ProfileScreenListItem
        title="Birthday"
        value="2/2/2001"
        path="/edit/birthday"
      />
      <ProfileScreenListItem
        title="Email"
        value="jishacheriyan02@gmail.com"
        path="/edit/email"
      />
      <br />
      <LogOutBtn />
    </div>
  );
};

export default ProfileScreen;
