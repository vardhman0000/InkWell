import React from 'react'
import Lottie from "lottie-react"
import PreLoader from "../assets/PreLoader.json"

setTimeout(() => {
    
}, 2000);

function PageLoader() {
    return (
        <div className='absolute top-0 left-0 bg-white w-screen h-screen flex justify-center items-center'>
            <Lottie className='w-auto' animationData={PreLoader}/>
        </div>
    )
}

export default PageLoader
