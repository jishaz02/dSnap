import React from 'react'
import SnapLogo from '../assets/snap-logo.svg'
import GoogleLoginBtn from '../components/GoogleLoginBtn'



export default function LoginScreen() {
    return (
        <div className=' bg-[#FFFC00] h-screen w-screen flex justify-center items-center '>

            <div className=' flex flex-col justify-center items-center'>
                <img src={SnapLogo} alt='dSnap' className=' h-28' />
                <GoogleLoginBtn />
            </div>


        </div>
        //Wrap logo and google button in one div so that both will be aligned to center

    )
}


