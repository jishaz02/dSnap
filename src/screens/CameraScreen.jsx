import React, { useRef, useEffect, useState } from 'react'
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const CameraScreen = () => {
    const [photo, setPhoto] = useState(null);




    return (

        <div>

            {photo === null && <Camera
                onTakePhoto={(dataUri) => { setPhoto(dataUri); }}
                isFullscreen={true}

            />}

            {photo != null && <img src={photo} alt="photo" className=' h-screen w-screen' />}

            {photo != null && <img src="https://img.icons8.com/external-free-is-layf-royyan-wijaya/24/000000/external-close-revamp-3-free-is-layf-royyan-wijaya.png" className=' fixed top-2 left-2 z-10 ' onClick={() => setPhoto(null)} />}
        </div>

    )
}



export default CameraScreen
