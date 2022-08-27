import React from 'react'

const EditBirthdayScreen = () => {
    return (
        <div>
            <div className='flex items-center border-b p-2 w-screen'>
                <img
                    src="https://img.icons8.com/ios-filled/50/388E3C/less-than.png"
                    alt="Arrow"
                    className="h-4 "
                />
                <p className=" text-green-700 font-bold ">Birthday</p>
            </div>
            <p className=' m-2'>Choose carefully-you can only change your birthday a limited number of times.</p>
            <input type="date" name="" className='w-full border-b-2 p-2 focus:outline-none' />
            <p className=" text-blue-700 flex justify-center">Birthday Party</p>
        </div>

    )
}

export default EditBirthdayScreen