import React from 'react'

const Loading = () => {
    return (
        <div className='flex justify-center items-center min-h-full h-full max-w-screen ' >
            <div className='h-32 w-32' >
                <div className="loading ">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>
        </div>
    )
}

export default Loading