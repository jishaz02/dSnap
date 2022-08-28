import React, { useEffect, useState } from "react";
import SendScreenListItem from "../components/SendScreenListItem";
import { getStorageProvider } from "../services/arcana";

const SendScreen = ({ image }) => {
  //   useEffect(() => {
  //     const getMyFiles = async () => {
  //       const storage = await getStorageProvider();
  //       try {
  //         const files = await storage.myFiles();
  //         console.log(files);
  //       } catch (error) {
  //         console.log(error);
  //       }
  //     };
  //     getMyFiles();
  //   }, []);
  return (
    <div>
      <SendScreenListItem image={image} />
    </div>
  );
};

export default SendScreen;
