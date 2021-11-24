import React, { Component } from 'react';
import './CustomCss.css'

export default class CustomCss extends Component {
    render() {
        return (
            <div className="container mt-1">
                <article className="bg-gray-500 p-5 shadow-lg" >
                    <p className="text-4xl text-white">responsive</p>
                    <p className="content ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi unde facere libero voluptas ipsam tempora, id ab eum natus eos.</p>
                    <button className=" animation-scale p-5">HOVER ME</button>
                </article>
            </div>
        );
    }
}


