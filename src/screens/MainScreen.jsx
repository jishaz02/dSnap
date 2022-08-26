import React, { useState } from "react";
import BottomBar from "../components/BottomBar";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

const MainScreen = () => {
  const [selectedTab, setSelectedTab] = useState("camera");
  return (
    <div>
      {selectedTab === "camera" ? (
        <HomeScreen />
      ) : selectedTab === "home" ? (
        <HomeScreen />
      ) : (
        <ProfileScreen />
      )}
      <BottomBar
        callback={(screen) => {
          setSelectedTab(screen);
        }}
      />
    </div>
  );
};

export default MainScreen;
