import React, { useState } from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";

const CameraScreen = ({ callback }) => {
  const [photo, setPhoto] = useState(null);
  // const [blob, setBlob] = useState(null);

  return (
    <div>
      {photo === null && (
        <Camera
          onTakePhoto={(dataUri) => {
            // const b = Buffer.from(dataUri, "base64");
            // setBlob(b);
            setPhoto(dataUri);
          }}
          isFullscreen={true}
        />
      )}

      {photo != null && (
        <img src={photo} alt="Captured" className=" h-screen w-screen" />
      )}

      {photo != null && (
        <img
          src="https://img.icons8.com/external-free-is-layf-royyan-wijaya/48/000000/external-close-revamp-3-free-is-layf-royyan-wijaya.png"
          alt="Cancel"
          className="fixed top-4 left-4 z-10 h-6"
          onClick={() => setPhoto(null)}
        />
      )}

      {photo != null && (
        <div
          className=" bg-[#FFFC00] h-12 w-28 fixed bottom-16 right-4 flex justify-center items-center rounded-full cursor-pointer"
          onClick={() => callback(photo)}
        >
          <p className=" text-black font-bold text-lg mr-2">Send</p>

          <img
            src="https://img.icons8.com/metro/52/000000/sent.png"
            alt="Send"
            className="h-5"
          />
        </div>
      )}
    </div>
  );
};

export default CameraScreen;
