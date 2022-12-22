import Profile from '../asset/profile1.jpg'
import CV from '../asset/my-cv.pdf'

export default function Home(){
    return (
        <div className=" flex justify-center" id='Home'>
            <div className="lg:w-1/4 sm:w-1/4 mx-2">
            <p className="pt-2">Hello, I'm </p>
            <h1 className="text-5xl py-1">Deepak Gole</h1>
            <p className="py-1">I'm Fullstack web-developor from India. I'm studing in IIT BHU.</p>
          <div className="mt-1"> <a href={CV} download className="border-2 solid text-sky-400 border-sky-400 rounded-lg px-2 py-1 hover:bg-sky-400 hover:text-sky-900">Download CV</a></div>
           <img src={Profile} alt="profile" className="rounded-t-full pt-4" />
           </div>
        </div>
    )
}