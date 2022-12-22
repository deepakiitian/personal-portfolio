import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { BsFillChatLeftTextFill } from 'react-icons/bs';
import { FaFileSignature } from 'react-icons/fa';
export default function Navbar(){
    const [Active, setActive] = React.useState('#')
    return (
        <div className='flex justify-center'>
        <nav className='flex flex-row gap-8 border justify-center fixed bottom-4 lg:w-1/5 rounded-full text-xl p-2 backdrop-opacity-10 backdrop-invert bg-sky-900/30 px-4'>
            <a href="#" onClick={() => setActive('#')} className={Active === '#' ? 'rounded-full backdrop-opacity-20 backdrop-invert bg-sky-900/30' : 'hover:text-blue-900'}><AiFillHome/></a>
            <a href="#About" onClick={() => setActive('#About')}  className={Active === '#About' ? 'rounded-full backdrop-opacity-20 backdrop-invert bg-sky-900/30' : 'hover:text-blue-900'}><AiOutlineUser/></a>
            <a href="#Experiences" onClick={() => setActive('#Experiences')} className={Active === '#Experiences' ? 'rounded-full backdrop-opacity-20 backdrop-invert bg-sky-900/30' : 'hover:text-blue-900'}><BiBook/></a>
            <a href="#Testinomials" onClick={() => setActive('#Testinomials')} className={Active === '#Testinomials' ? 'rounded-full backdrop-opacity-20 backdrop-invert bg-sky-900/30' : 'hover:text-blue-900'}><FaFileSignature/></a>
            <a href="#Contacts" onClick={() => setActive('#Contacts')} className={Active === '#Contacts' ? 'rounded-full backdrop-opacity-20 backdrop-invert bg-sky-900/30' : 'hover:text-blue-900'}><BsFillChatLeftTextFill/></a>
        </nav>
        </div>
    )
}