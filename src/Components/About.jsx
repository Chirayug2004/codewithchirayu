import AdminPic from "/src/assets/admin.jpg"
import html from "/src/assets/html.png";
import css from "/src/assets/css-3.png";
import js from "/src/assets/js.png";
import react from "/src/assets/atom.png";
import figma from "/src/assets/figma.png";

function About() {
  return (
   <>
    <div className="hero bg-green-800 h-full">
  <div className="hero-content flex-col lg:flex-row">
    <img
      src={AdminPic}
      className="w-60 h-auto hover:scale-90 rounded-lg shadow-2xl"
    />
    <div>
        <h1 className="text-white font-medium">About Me</h1>
      <h1 className="text-5xl text-white font-semibold">Who Is <span className="text-amber-500">Chirayu Ghai ?</span></h1>
      <p className="py-8 text-white">
      I am Doing BCA From Indira Gandhi National Open University (IGNOU) , i Am a freelancer also. What Can I Do For You !!
      </p>
      <button className="btn bg-amber-500 hover:bg-green-800 hover:text-white">Download CV </button>
    </div>
  </div>
</div>
<div className="min-h-full w-[100%]">
    <h1 id="workTxt" className="text-center text-3xl p-3">Behind My Work</h1>
    <div className="md:flex md:flex-row flex-col grid grid-cols-3 items-center justify-center gap-4 p-4">
    <div className="h-30 w-25 rounded-md bg-gray-200"><img className="place-self-center items-center mt-3" src={html} alt="" /></div>
    <div className="h-30 w-25 rounded-md bg-gray-200"><img className="place-self-center items-center mt-3" src={css} alt="" /></div>
    <div className="h-30 w-25 rounded-md bg-gray-200"><img className="place-self-center items-center mt-3" src={js} alt="" /></div>
    <div className="h-30 w-25 rounded-md bg-gray-200"><img className="place-self-center items-center mt-3" src={react} alt="" /></div>
    <div className="h-30 w-25 rounded-md bg-gray-200"><img className="place-self-center items-center mt-3" src={figma} alt="" /></div>
    </div>
   </div>

   </>
  )
}

export default About
