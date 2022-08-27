import React, { useState } from "react";
import BottomBar from "../components/BottomBar";
import CameraScreen from "./CameraScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";

const MainScreen = () => {
  const [selectedTab, setSelectedTab] = useState("camera");
  return (
    <div>
      {selectedTab === "camera" ? (
        <CameraScreen />
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
