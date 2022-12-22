import React from 'react'
import me from '../asset/profile1.jpg'
export default function About() {
    return (
        <section className='p-8 lg:h-screen md:screen' id='About'>
            <h1 className='text-xl font-400'>About Me</h1>
            <div className=' py-2 flex lg:flex-row sm:flex-row flex-col justify-center items-center hover:cursor-pointer'>
                <div className='bg-sky-400 rounded-2xl lg:w-1/4 sm:w-1/4 h-fit'>
                    <img src={me} alt="me" className='rotate-3 hover:rotate-0 rounded-2xl' />
                </div>
                <div className='flex flex-col lg:w-2/3 sm:w-2/3'>
                    <div className='flex lg:flex-row sm:flex-row flex-col justify-around items-center lg:h-1/2 sm:h-1/2'>
                        <div className='lg:w-1/5 lg:h-1/2 w-2/3 border flex flex-col justify-center rounded-2xl text-center bg-sky-400 hover:bg-sky-900 m-4 p-4 hover:cursor-pointer'>
                            <i class="fa-solid fa-award fa-2x"></i>
                            <div className='text-lg'>Experience</div>
                            <div className='text-sm'>3+years</div>
                        </div>
                        <div className='lg:w-1/5 lg:h-1/2 w-2/3 border flex flex-col justify-center rounded-2xl text-center bg-sky-400 hover:bg-sky-900 m-4 p-4 hover:cursor-pointer'>
                            <i class="fa-solid fa-user-group fa-2x"></i>
                            <div className='text-lg'>Clients</div>
                            <div className='text-sm'>300+Worldwide</div>
                        </div>
                        <div className='lg:w-1/5 lg:h-1/2 w-2/3 border flex flex-col justify-center rounded-2xl text-center bg-sky-400 hover:bg-sky-900 m-4 p-4 hover:cursor-pointer'>
                            <i class="fa-solid fa-folder-open fa-2x"></i>
                            <div className='text-lg'>Projects</div>
                            <div className='text-sm'>80+Completed</div>
                        </div>
                    </div>
                    <p className='px-12 text-left hover:cursor-pointer'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam ratione molestias minus eius. Doloremque dolore eum rerum voluptatum? Blanditiis voluptas labore repellat consequatur fugit delectus at quod rerum eum inventore!</p>
                   <a href="#Contacts" className='border-2 solid bg-sky-400 rounded-lg px-2 py-1 my-2 w-1/3 mx-12 hover:bg-transparent text-lg'>Lets talk </a>
                </div>
            </div>
        </section>
    )
}