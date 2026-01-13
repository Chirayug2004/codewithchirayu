import ModelViewer from "./ModelViewer"
import PC from "/src/assets/PC.png"

function Home() {
  return (
   <>
   <div className="div flex md:flex-row flex-col">
    <div className="h-full md:w-[50%] w-[100%] p-5">
        <h1 id="herotxt" className="font-Cal text-4xl mt-[20%]">I am <span id="nametxt" className="font-oleo text-4xl text-amber-600 underline decoration-dashed underline-offset-8">Chirayu Ghai</span> Full Stack Web Developer Based In India</h1>
        <p className="mt-[5%]">I'm Chirayu — a creative Web Developer, Graphic Designer, Video Editor, and UI/UX Designer. I build responsive websites, design stunning visuals, and craft engaging digital experiences. As a freelancer, I help brands bring their ideas to life with clean design and functional code.</p>
        <a href="#contact" className="btn mt-[10%] bg-green-800 hover:bg-amber-600  text-white p-5">Hire Me</a>
        <img src={PC} className="md:hidden block w-[100%] h-[100%]" />
    </div>
   <div className="h-220 hidden md:block md:w-[50%] w-[100%]">
    <ModelViewer />
   </div>
   </div>
   </>
  )
}

export default Home
