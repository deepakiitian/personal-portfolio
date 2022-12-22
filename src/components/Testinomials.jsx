import React from "react";
import mypic from '../asset/deepakiitian.jpg'
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

export default function Testinomials() {
    return (
        <section className="px-10 sm:h-screen" id="Testinomials">
            <h1 className="text-xl font-400 py-5">Testinomials</h1>
            <Swiper className="flex flex-col justify-center px-6 sm:h-2/3 w-4/5"
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}>
                <SwiperSlide className="flex flex-col justify-center p-2 border rounded-lg text-white bg-sky-400">
                    <div className="flex justify-center p-4"><img src={mypic} className='w-12 h-12 border rounded-full' /></div>
                    <h1 className="text-lg font-bold">Astrio</h1>
                    <p className="px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga, iste excepturi voluptates corporis id obcaecati doloribus sint maiores labore, aut tempora autem officia repudiandae impedit rem, dolores expedita perferendis.</p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col justify-center p-2 border rounded-lg bg-sky-400">
                    <div className="flex justify-center p-4"><img src={mypic} className='w-12 h-12 border rounded-full' /></div>
                    <h1 className="text-lg font-bold">Astrio</h1>
                    <p className="px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga, iste excepturi voluptates corporis id obcaecati doloribus sint maiores labore, aut tempora autem officia repudiandae impedit rem, dolores expedita perferendis.</p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col justify-center p-2 border rounded-lg bg-sky-400">
                    <div className="flex justify-center p-4"><img src={mypic} className='w-12 h-12 border rounded-full' /></div>
                    <h1 className="text-lg font-bold">Astrio</h1>
                    <p className="px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga, iste excepturi voluptates corporis id obcaecati doloribus sint maiores labore, aut tempora autem officia repudiandae impedit rem, dolores expedita perferendis.</p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col justify-center p-2 border rounded-lg bg-sky-400">
                    <div className="flex justify-center p-4"><img src={mypic} className='w-12 h-12 border rounded-full' /></div>
                    <h1 className="text-lg font-bold">Astrio</h1>
                    <p className="px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga, iste excepturi voluptates corporis id obcaecati doloribus sint maiores labore, aut tempora autem officia repudiandae impedit rem, dolores expedita perferendis.</p>
                </SwiperSlide>
                <SwiperSlide className="flex flex-col justify-center p-2 border rounded-lg bg-sky-400">
                    <div className="flex justify-center p-4"><img src={mypic} className='w-12 h-12 border rounded-full' /></div>
                    <h1 className="text-lg font-bold">Astrio</h1>
                    <p className="px-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fuga, iste excepturi voluptates corporis id obcaecati doloribus sint maiores labore, aut tempora autem officia repudiandae impedit rem, dolores expedita perferendis.</p>
                </SwiperSlide>
            </Swiper>
        </section>
    )
}