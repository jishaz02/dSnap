import React, { useEffect, useState } from "react";
import SnapLogo from "../assets/snap-logo.svg";
import GoogleLoginBtn from "../components/GoogleLoginBtn";
import { getAuth } from "../services/arcana";

export default function LoginScreen() {
  useEffect(() => {
    const check = async () => {
      const auth = await getAuth();
      const isLoggedIn = await auth.isLoggedIn();
      if (isLoggedIn) {
        window.location.href = "/";
      }
    };
    check();
  }, []);

  return (
    <div className=" bg-[#FFFC00] h-screen w-screen flex justify-center items-center ">
      <div className=" flex flex-col justify-center items-center">
        <img src={SnapLogo} alt="dSnap" className=" h-28" />
        <GoogleLoginBtn />
      </div>
    </div>
    //Wrap logo and google button in one div so that both will be aligned to center
  );
}
