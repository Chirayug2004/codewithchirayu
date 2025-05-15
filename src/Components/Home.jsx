import ModelViewer from "./ModelViewer"

function Home() {
  return (
   <>
   <div className="div flex md:flex-row flex-col">
    <div className="h-screen md:w-[50%] w-[100%] p-5">
        <h1 id="herotxt" className="font-Cal text-4xl mt-[20%]">I am <span id="nametxt" className="font-oleo text-4xl text-amber-600 underline decoration-dashed underline-offset-8">Chirayu Ghai</span> Full Stack Web Developer Based In India</h1>
        <p className="mt-[5%]">I am Doing BCA From Indira Gandhi National Open University (IGNOU) , i Am a freelancer also. What Can I Do For You !!</p>
        <a href="#contact" className="btn mt-[10%] bg-green-800 hover:bg-amber-600  text-white p-5">Hire Me</a>
        <div className="div md:hidden block w-[100%] h-[70%]"><ModelViewer /></div>
    </div>
   <div className="h-screen hidden md:block md:w-[50%] w-[100%]">
    <ModelViewer />
   </div>
   </div>
   </>
  )
}

export default Home
