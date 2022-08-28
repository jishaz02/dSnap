import React, { useEffect, useState } from "react";
import BottomBar from "../components/BottomBar";
import CameraScreen from "./CameraScreen";
import HomeScreen from "./HomeScreen";
import ProfileScreen from "./ProfileScreen";
import { getAuth } from "../services/arcana";
import SendScreen from "./SendScreen";

const MainScreen = () => {
  const [selectedTab, setSelectedTab] = useState("camera");
  const [image, setImage] = useState(null);

  useEffect(() => {
    const check = async () => {
      const auth = await getAuth();
      const isLoggedIn = await auth.isLoggedIn();
      if (!isLoggedIn) {
        window.location.href = "/login";
      }
    };
    check();
  }, []);

  return (
    <div>
      {selectedTab === "send" ? (
        <SendScreen image={image} />
      ) : selectedTab === "camera" ? (
        <CameraScreen
          callback={(image) => {
            setImage(image);
            setSelectedTab("send");
          }}
        />
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
