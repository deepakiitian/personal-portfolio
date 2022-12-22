import React from "react";
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillFacebook} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
export default function Footer(){
    return (
        <section className="bg-grey-400 flex flex-col justify-center py-20 bg-gray-800">
            <h1 className="text-red-400 text-2xl font-bold py-4">Port<span className="text-red-900">folio</span></h1>
            <ul className="flex sm:flex-row flex-col justify-center py-4 text-lg cursor-pointer">
                <li className="px-4">Portfolio</li>
                <li className="px-4">About</li>
                <li className="px-4">Experience</li>
                <li className="px-4">Testinomials</li>
                <li className="px-4">Contacts</li>
            </ul>
            <div className="flex flex-row justify-center py-4">
                <a href="https://www.instagram.com/deepak_gole_01/" className="text-4xl px-2"><AiFillInstagram /></a>
                <a href="https://www.facebook.com/deepak.gole.7906" className="text-4xl px-2"><AiFillFacebook /></a>
                <a href="https://twitter.com/Deepak13886718" className="text-4xl px-2"><AiOutlineTwitter /></a>
            </div>
            <h1>Portfolio © copyright 2022</h1>
        </section>
    )
}