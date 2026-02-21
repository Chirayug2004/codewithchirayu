import AdminPic from "/src/assets/admin.jpg"
import html from "/src/assets/html.png";
import css from "/src/assets/css-3.png";
import js from "/src/assets/js.png";
import react from "/src/assets/atom.png";
import figma from "/src/assets/figma.png";
import Resume from "/Resume.pdf"
import ProfileCard from '../component/ProfileCard'
import { CometCard } from "../Components/ui/comet-card";
import { Button } from "../Components/ui/stateful-button";
import LogoLoop from '../component/LogoLoop';



import {
  SiReact,
  SiTailwindcss,
  SiOpenai,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiCoreldraw,
  SiFigma,
  SiGreensock,
} from "react-icons/si";

const techLogos = [
  { node: <SiOpenai />, title: "ChatGPT", href: "https://openai.com" },
  { node: <SiAdobephotoshop />, title: "Photoshop", href: "https://www.adobe.com/products/photoshop.html" },
  { node: <SiAdobepremierepro />, title: "Premiere Pro", href: "https://www.adobe.com/products/premiere.html" },
  { node: <SiAdobeaftereffects />, title: "After Effects", href: "https://www.adobe.com/products/aftereffects.html" },
  { node: <SiCoreldraw />, title: "CorelDRAW", href: "https://www.coreldraw.com" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiGreensock />, title: "GSAP", href: "https://gsap.com" },
  { node: <SiFigma />, title: "Figma", href: "https://figma.com" },
  // { node: <SiSpline />, title: "Spline", href: "https://spline.design" },
];

function WorkLoop() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
      {/* Basic horizontal loop */}
      <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />

      {/* Vertical loop with deceleration on hover */}
      {/* <LogoLoop
        logos={techLogos}
        speed={100}
        direction="left"
        logoHeight={60}
        gap={60}
        hoverSpeed={0}
        fadeOut
  useCustomRender={false}
/> */}
    </div>
  );
}

function aboutText() {
  return (
    <>
      <h3>
        Hi, I’m Chirayu — a passionate Web Developer, Graphic Designer, Video Editor, and UI/UX Designer. With a strong creative vision and technical expertise, I bring ideas to life through clean code, stunning visuals, and intuitive user experiences.
      </h3>
    </>
  )
}

export function StatefulButtonDemo() {
  // dummy API call
  const handleClick = () => {
    return new Promise((resolve) => {
      setTimeout(resolve, 1000);
    });
  };
  return (
    <div className="flex h-40 w-full items-center justify-center">
      <a href="/Resume.pdf" download="/Resume.pdf">
        <Button onClick={handleClick}>Download</Button>
      </a>
    </div>
  );
}

function About() {
  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center px-6 lg:px-20 py-16">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT SIDE - IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <CometCard>
              <button
                type="button"
                className="w-72 lg:w-80 flex flex-col rounded-2xl bg-[#eaeaea] p-3 shadow-xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="relative aspect-[3/4] w-full">
                  <img
                    src={AdminPic}
                    alt="Chirayu"
                    className="absolute inset-0 h-full w-full rounded-2xl object-cover"
                  />
                </div>

                <div className="mt-4 text-center">
                  <h4 className="text-lg font-semibold text-black">
                    Chirayu Ghai
                  </h4>
                  <p className="text-sm text-gray-500">
                    Web Developer & Video Editor
                  </p>
                </div>
              </button>
            </CometCard>
          </div>

          {/* RIGHT SIDE - TEXT */}
          <div className="max-w-2xl justify-center">
            <p className="text-[25px]">Hi, I’m Chirayu — a passionate Web Developer, Graphic Designer, Video Editor, and UI/UX Designer. With a strong creative vision and technical expertise, I bring ideas to life through clean code, stunning visuals, and intuitive user experiences.</p>
             <StatefulButtonDemo />
          </div> 

          </div>
      </section>
      {/* <div className="container-fluid py-5 px-20 h-full">
        <div className="hero-content d-flex flex-col lg:flex-row">
          <div className="">
            <CometCard>
              <button
                type="button"
                className="my-10 flex w-80 cursor-pointer flex-col items-stretch rounded-[16px] border-0 bg-[#eaeaea] p-2 md:my-20 md:p-4"
                aria-label="View invite F7RA"
                style={{
                  transformStyle: "preserve-3d",
                  transform: "none",
                  opacity: 1,
                }}
              >
                <div className="mx-2 flex-1">
                  <div className="relative mt-2 aspect-[3/4] w-full">
                    <img
                      loading="lazy"
                      className="absolute h-full w-full rounded-[16px] object-cover "
                      alt="Invite background"
                      src='admin.jpg'
                      style={{
                        // boxShadow: "rgba(0, 0, 0, 0.01) 0px 2px 3px 0px",
                        opacity: 1,
                      }}
                    />
                  </div>
                </div>
                <div className="mt-2 flex flex-shrink-0 items-center justify-between p-4 font-mono text-white">
                  <h4 className="text-black">Chirayu Ghai</h4>
                  <h5 className="text-xs text-black opacity-50">Web Designer & Video Editor</h5>
                </div>
              </button>
            </CometCard>
          </div>

          <div className="px-4">
            <FallingText
              text={`Hi, I’m Chirayu — a passionate Web Developer, Graphic Designer, Video Editor, and UI/UX Designer. With a strong creative vision and technical expertise, I bring ideas to life through clean code, stunning visuals, and intuitive user experiences.`}
              highlightWords={["Chirayu", "Web Developer", "Graphic Designer", "Video Editor", "UI/UX Designer"]}
              highlightClass="highlighted"
              trigger="click"
              backgroundColor="transparent"
              wireframes={false}
              gravity={0.56}
              fontSize="2rem"
              mouseConstraintStiffness={0.9}
            />
          </div>

        </div>
      </div> */}
      <div className="min-h-full w-[100%]">
        <h1 id="workTxt" className="text-center text-4xl p-3 mb-10"><span className="bg-green-700 text-white p-3 font-extrabold rounded">Behind</span> <span className="bg-amber-400 p-3 font-extrabold rounded">My Work</span></h1>
        {/* <div className="md:flex md:flex-row flex-col grid grid-cols-3 items-center justify-center gap-4 p-4">
          <div className="h-30 w-25 rounded-md bg-gray-200"><img className="place-self-center items-center mt-3" src={html} alt="" /></div>
          <div className="h-30 w-25 rounded-md bg-gray-200"><img className="place-self-center items-center mt-3" src={css} alt="" /></div>
          <div className="h-30 w-25 rounded-md bg-gray-200"><img className="place-self-center items-center mt-3" src={js} alt="" /></div>
          <div className="h-30 w-25 rounded-md bg-gray-200"><img className="place-self-center items-center mt-3" src={react} alt="" /></div>
          <div className="h-30 w-25 rounded-md bg-gray-200"><img className="place-self-center items-center mt-3" src={figma} alt="" /></div>
        </div> */}
        <WorkLoop />
      </div>



    </>
  )
}


export default About



