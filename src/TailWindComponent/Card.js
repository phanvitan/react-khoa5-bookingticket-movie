import React from 'react'

export default function Card() {
    return (
        <div className="card w-full">
            <div className="card-body bg-gray-200 py-8 rounded-tr-lg rounded-tl-lg px-7">
                <h3 className="text-purple-800 font-bold text-xs">Category</h3>
                <p className="text-black text-1xl">cybersoft front end dev</p>
                <p className="text-black text-1xl font-thin my-2">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae quidem hic nesciunt culpa mollitia. Expedita at molestias nihil culpa natus.</p>
            </div>
            <div className="card-footer rounded-bl-lg rounded-br-lg flex justify-between bg-yellow-400 w-full px-2">
                <p className="mt-4">1 usd</p>
                <button className="bg-purple-900 rounded-lg text-white px-2 py-2 my-2 hover:text-red-500 hover:bg-green-400 transition duration-500">register</button>
            </div>

        </div>
    )
}
