import React from "react"
import { MdEmail } from 'react-icons/md'
import { FaFacebookMessenger } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

export default function Contacts() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xmwud2i', 'template_lvwssfd', form.current, 'UKcAFK-_SL2Z4KffU')
      e.target.reset()
  };
    return (
        <section className="sm:h-screen" id="Contacts">
            <h1 className="text-xl font-400 py-4">Let's Talk</h1>
            <div className="flex flex-col justify-center">
                <div className="flex sm:flex-row flex-col justify-center py-4">
                    <div className="flex flex-col justify-center border rounded-lg mx-4 my-2 bg-sky-400 hover:bg-transparent cursor-pointer px-2 py-1">
                        <div className="flex justify-center text-lg"><MdEmail className="w-fit" /></div>
                        <h1 className="font-bold">Email</h1>
                        <a href="mailto:deepakg412002@gmail.com" target="_blank">Send me massage</a>
                    </div>
                    <div className="flex flex-col justify-center border rounded-lg mx-4 my-2 bg-sky-400 hover:bg-transparent cursor-pointer px-2 py-1">
                       <div className="flex justify-center text-lg"> <FaFacebookMessenger /></div>
                        <h1 className="font-bold">Facebook</h1>
                        <a href="https://m.me/deepak.gole.7906" target="_blank">Send me massage</a>
                    </div>
                    <div className="flex flex-col justify-center border rounded-lg mx-4 my-2 bg-sky-400 hover:bg-transparent cursor-pointer px-2 py-1">
                        <div className="flex justify-center text-lg"><IoLogoWhatsapp /></div>
                        <h1 className="font-bold">Whatsapp</h1>
                        <a href="https://web.whatsapp.com/send?phone=+918889801771" target="_blank">Send me massage</a>
                    </div>
                </div>
                <div className="flex justify-center py-4">
                    <form ref={form} onSubmit={sendEmail} className="flex flex-col justify-center sm:w-1/2">
                   <input type="name" name="name" placeholder="Type your name" className="m-2 bg-sky-900 border rounded-lg text-center px-4 py-1" />
                   <input type="email" name="email" placeholder="Type your Email" className="m-2 bg-sky-900 border rounded-lg text-center px-4 py-1" />
                   <textarea name="message" id="" cols="30" rows="10" placeholder="type massage" className="m-2 bg-sky-900 border rounded-lg h-20 text-center px-4 py-1"></textarea>
                   <button className="border bg-sky-400 hover:bg-transparent rounded-lg w-1/2 text-center text-lg font-bold mx-2 flex justify-center"><input type="submit" value="" />Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}