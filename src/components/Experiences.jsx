import React from "react"
import { BsFillPatchCheckFill } from 'react-icons/bs'
export default function Experiences() {
    return (
        <section className="sm:h-screen py-10" id="Experiences">
            <h1 className="text-xl font-400">My Experience</h1>
            <div className="flex flex-col sm:flex-row justify-center px-5 sm:h-3/5">
                <div className="border bg-sky-400 px-10 py-4 rounded-2xl hover:bg-transparent cursor-pointer m-5 sm:w-2/5 p-5">
                    <h1 className="py-2 my-2 text-center">Frontend Development</h1>
                    <div className="grid grid-cols-2 gap-10 place-content-center">
                        <div className="flex flex-row">
                            <BsFillPatchCheckFill />
                            <h5 className="px-2">HTML</h5>
                        </div>
                        <div className="flex flex-row items-center">
                            <BsFillPatchCheckFill />
                            <h5 className="px-2">CSS</h5>
                        </div>
                        <div className="flex flex-row items-center">
                            <BsFillPatchCheckFill />
                            <h5 className="px-2">Tailwind</h5>
                        </div>
                        <div className="flex flex-row items-center">
                            <BsFillPatchCheckFill />
                            <h5 className="px-2">Javascript</h5>
                        </div>
                        <div className="flex flex-row items-center">
                            <BsFillPatchCheckFill />
                            <h5 className="px-2">Vue</h5>
                        </div>
                        <div className="flex flex-row items-center">
                            <BsFillPatchCheckFill />
                            <h5 className="px-2">React</h5>
                        </div>
                    </div>
                </div>
                <div className="border bg-sky-400 px-10 py-4 rounded-2xl hover:bg-transparent cursor-pointer m-5 sm:w-2/5 p-5">
                    <h1 className="my-2 py-2 text-center">Backend Development</h1>
                    <div className="grid grid-cols-2 gap-10 place-content-center">
                        <div className="flex flex-row items-center">
                            <BsFillPatchCheckFill />
                            <h5 className="px-2">Node js</h5>
                        </div>
                        <div className="flex flex-row items-center">
                            <BsFillPatchCheckFill />
                            <h5 className="px-2">Mongo DB</h5>
                        </div>
                        <div className="flex flex-row items-center">
                            <BsFillPatchCheckFill />
                            <h5 className="px-2">MySQL</h5>
                        </div>
                        <div className="flex flex-row items-center">
                            <BsFillPatchCheckFill />
                            <h5 className="px-2">PHP</h5>
                        </div>
                        <div className="flex flex-row items-center">
                            <BsFillPatchCheckFill />
                            <h5 className="px-2">Express js</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}