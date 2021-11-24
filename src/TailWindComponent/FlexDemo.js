import React from 'react'

export default function FlexDemo() {
    return (
        <div className="w-screen h-screen bg-purple-400" >
            <div className="flex h-1/2 w-full bg-green-400 justify-around flex-col items-center flex-wrap gap-8" >
                <div className="fitem h-1/5 w-10 bg-red-400"></div>
                <div className="fitem h-1/3 w-10 bg-yellow-400"></div>
                <div className="fitem h-1/4 w-10 bg-blue-400"></div>
            </div>
        </div>


    )
}
