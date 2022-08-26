import React from "react";
import GoogleLogo from "../assets/google-logo.svg";


const GoogleLoginBtn = () => {
  return (
    <div
      className="flex px-6 py-2 rounded-full cursor-pointer border-2 border-gray-300 bg-white m-10"
    // onClick={signInWithGoogle}
    >
      <img src={GoogleLogo} alt="Google Login" />
      <p className=" font-semibold ml-2">Sign in With Google</p>
    </div>
  );
};

export default GoogleLoginBtn;
