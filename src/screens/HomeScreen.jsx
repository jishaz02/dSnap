import React from "react";
import HomeScreenListItem from "../components/HomeScreenListItem";

const HomeScreen = () => {
  return (
    <div>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
        <HomeScreenListItem />
      ))}
    </div>
  );
};

export default HomeScreen;
