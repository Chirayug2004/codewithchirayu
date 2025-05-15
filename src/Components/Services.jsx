import WebDesignPic from "/src/assets/landing-page.png"
import UXPic from "/src/assets/ux.png"
import WebDevPic from "/src/assets/Web Logo.png"
import GraphicPic from "/src/assets/graphic-designer.png"
import VideoPic from "/src/assets/video-editor.png"

const WebDesign= () => {
    return(
        <>
       <div class= "hover:bg-black  hover:text-white max-w-xs p-5 border rounded-xl text-center shadow-sm hover:shadow-lg transition duration-300 bg-gray-100 hover:cursor-pointer" >
       <div class="flex justify-center mb-4">
       <img src={WebDesignPic} alt="Web Design Icon" class="w-12 h-12" />
       </div>
      <h2 class="text-lg font-semibold mb-2">Web Design</h2>
      <h2 class="text-sm">
    Web design is the process of planning and arranging content on a website to create a visually appealing and user-friendly experience.
    </h2>
    </div>
    </>
    );
 };

 const UiUxDesign= () => {
    return(
        <>
       <div class= "hover:bg-black  hover:text-white max-w-xs p-5 border rounded-xl text-center shadow-sm hover:shadow-lg transition duration-300 bg-gray-100 hover:cursor-pointer" >
       <div class="flex justify-center mb-4">
       <img src={UXPic} alt="Web Design Icon" class="w-12 h-12" />
       </div>
      <h2 class="text-lg font-semibold mb-2">UI/UX Design</h2>
      <h2 class="text-sm">
    UI (User Interface) and UX (User Experience) design work together to create user-friendly and engaging digital products.
    </h2>
    </div>
    </>
    );
 };

 const WebDev= () => {
    return(
        <>
       <div class= "hover:bg-black  hover:text-white max-w-xs p-5 border rounded-xl text-center shadow-sm hover:shadow-lg transition duration-300 bg-gray-100 hover:cursor-pointer" >
       <div class="flex justify-center mb-4">
       <img src={WebDevPic} alt="Web Design Icon" class="w-12 h-12" />
       </div>
      <h2 class="text-lg font-semibold mb-2">Web Development</h2>
      <h2 class="text-sm">
    Web development is the process of creating, building, and maintaining websites and web applications.
    </h2>
    </div>
    </>
    );
 };

 const GraphicDesign= () => {
    return(
        <>
       <div class= "hover:bg-black  hover:text-white max-w-xs p-5 border rounded-xl text-center shadow-sm hover:shadow-lg transition duration-300 bg-gray-100 hover:cursor-pointer" >
       <div class="flex justify-center mb-4">
       <img src={GraphicPic} alt="Web Design Icon" class="w-12 h-12" />
       </div>
      <h2 class="text-lg font-semibold mb-2">Graphic Design</h2>
      <h2 class="text-sm">
    Graphic design is the art and practice of combining visual elements like typography, images, colors, and shapes to create visual content.
    </h2>
    </div>
    </>
    );
 };

 const VideoEditing= () => {
    return(
        <>
       <div class= "hover:bg-black  hover:text-white max-w-xs p-5 border rounded-xl text-center shadow-sm hover:shadow-lg transition duration-300 bg-gray-100 hover:cursor-pointer" >
       <div class="flex justify-center mb-4">
       <img src={VideoPic} alt="Web Design Icon" class="w-12 h-12" />
       </div>
      <h2 class="text-lg font-semibold mb-2">Video Editing</h2>
      <h2 class="text-sm">
    Video editing is the process of manipulating and arranging video footage to create a finished product, often by combining clips, adding effects, and incorporating audio.
    </h2>
    </div>
    </>
    );
 };

function Services() {

    return (
        <>
            <div className="min-h-screen w-[100%]">
                <h1 className="text-3xl mt-[15%] mx-[6%]"><span id="servicestxt" className="text-orange-600">Services</span> I Provide</h1>
                <div className="min-h-screen grid md:grid-cols-3 flex-col gap-5 p-5">
                    <WebDesign />
                    <UiUxDesign />
                    <WebDev />
                    <GraphicDesign />
                    <VideoEditing />
                </div>
            </div>
        </> 
    )
}

export default Services
