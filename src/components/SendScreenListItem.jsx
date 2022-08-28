import React from "react";
import { getStorageProvider } from "../services/arcana";

const SendScreenListItem = ({ image, address }) => {
  const upload = async () => {
    console.log("uploading");
    const storage = await getStorageProvider();
    const uploader = await storage.getUploader();
    uploader
      .upload(image)
      .then((did) => {
        console.log(did);
        //console.log(BigNumber.from(did));
      })
      .catch((error) => {
        console.log(error);
      });
    // share(did, storage, address);
  };

  //   const share = async (did, storage, address) => {
  //     const access = await storage.getAccess();
  //     await access.share(did, address, 1000);
  //   };
  return (
    <div
      className="w-screen h-14 border-b flex items-center p-2 cursor-pointer"
      onClick={() => upload()}
    >
      <div className="h-10 w-10 bg-blue-700 rounded-full mr-2"></div>
      <div className="flex flex-col justify-center">
        <p className="text-md font-semibold">Jisha</p>
      </div>
    </div>
  );
};

export default SendScreenListItem;
