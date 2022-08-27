import React from 'react'

const EditEmailScreen = () => {
    return (
        <div>
            <div className='flex items-center border-b p-2 w-screen'>
                <img
                    src="https://img.icons8.com/ios-filled/50/388E3C/less-than.png"
                    alt="Arrow"
                    className="h-4 "
                />
                <p className=" text-green-700 font-bold ">Email</p>
            </div>
            <p className=' m-2'>This makes it easier for you to recover your account,
                for you and your friends to find each other on Snapchat, and more.</p>
            <input type="text" name="Jisha Cheriyan" className='w-full border-b-2 p-2 focus:outline-none' />
            <p className=" text-blue-700 m-2">Email address</p>
        </div>

    )
}

export default EditEmailScreen