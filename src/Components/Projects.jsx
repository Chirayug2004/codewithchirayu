import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CurvedLoop from "./CurvedLoop";

function Projects() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const projects = [
    {
      title: "My Pure Pantry",
      image: "4.png",
      link: "http://mypurepantry.com/",
    },
    {
      title: "Honest Jaggery",
      image: "1.png",
      link: "https://www.honestjaggery.com/",
    },
    {
      title: "City Dental Hospital",
      image: "3.png",
      link: "https://citidentalhospital.com/",
    },
    {
      title: "Jassal Engineers",
      image: "2.png",
      link: "https://b2bpunjab.com/jassal/index.php",
    },
  ];

  const reels = [
    "https://res.cloudinary.com/dv81yfnes/video/upload/v1768318343/1_vyxffl.mp4",
    "https://res.cloudinary.com/dv81yfnes/video/upload/v1768318504/6_n97emu.mp4",
    "https://res.cloudinary.com/dv81yfnes/video/upload/v1768318514/4_mccsot.mp4",
    "https://res.cloudinary.com/dv81yfnes/video/upload/v1768318747/2_pjfzjg.mp4",
    "https://res.cloudinary.com/dv81yfnes/video/upload/v1768318759/9_yuci7q.mp4",
    "https://res.cloudinary.com/dv81yfnes/video/upload/v1768318854/7_so7zgx.mp4",
    "https://res.cloudinary.com/dv81yfnes/video/upload/v1768318943/8_uhfet5.mp4",
    "https://res.cloudinary.com/dv81yfnes/video/upload/v1768319032/5_dxqdhn.mp4",
    "https://res.cloudinary.com/dv81yfnes/video/upload/v1768319164/3_thqbov.mp4",
    "https://res.cloudinary.com/dv81yfnes/video/upload/v1770554939/reel-1_Final_tqxgq4.mp4",
  ];

  return (
    <section className="w-full py-20 px-6 lg:px-20">

      {/* SECTION TITLE */}
      <div className="max-w mx-auto mb-16">
        <h1 className="text-3xl md:text-4xl font-bold">
          My Latest <span className="text-orange-500">Projects</span>
        </h1>
      </div>

      {/* PROJECT GRID */}
      <div className="max-w mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 bg-white"
          >
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover hover:scale-105 transition duration-500"
              />
            </a>

            <div className="bg-green-700 text-white text-center py-4">
              <h2 className="text-lg font-semibold">
                {project.title}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* REELS SLIDER */}
      <div className="max-w mx-auto mb-20">
        <Slider {...sliderSettings}>
          {reels.map((video, index) => (
            <div key={index} className="px-3">
              <video
                src={video}
                className="rounded-xl w-full h-[500px] md:h-[400px] lg:h-[650px] object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* CURVED TEXT */}
      <CurvedLoop
        marqueeText="Modern ✦ Web ✦ Experiences ✦ By ✦ Chirayu ✦"
        speed={3}
        curveAmount={500}
        direction="right"
        interactive={true}
        className="custom-text-style"
      />

    </section>
  );
}

export default Projects;





// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import CurvedLoop from "./CurvedLoop";
// import BlurText from "@/component/BlurText";

// function Projects() {
//   var settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 4,
//   };
//   var SmSettings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   };
//   const handleAnimationComplete = () => {
//     console.log('Animation completed!');
//   };

//   return (
//     <>
//       <div className="h-full w-[100%]  pb-5">
//         <h1 id="projectsTxt" className="text-2xl p-16 mx-3">My Latest <span className="text-orange-500">Projects</span></h1>

//         <div className="container-2xl p-5 place-items-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-5">

//           <div className="card bg-base-100 w-65 md:w-70 lg:w-80 shadow-sm text-center">
//             <figure>
//               <a href="http://mypurepantry.com/">
//                 <img
//                   src="4.png"
//                   alt="Shoes" />
//               </a>
//             </figure>
//             <div className="card-body bg-green-700 text-white items-center rounded">
//               <h1 className="card-title">
//                 <a href="http://mypurepantry.com/" className="text-2xl font-bold">My Pure Pantry</a>
//                 {/* <div className="badge badge-secondary">NEW</div> */}
//               </h1>
//               {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//               <div className="card-actions justify-end">
//                 <div className="badge badge-outline">Fashion</div>
//                 <div className="badge badge-outline">Products</div>
//               </div> */}
//             </div>
//           </div>

//           <div className="card bg-base-100 w-65 md:w-70 lg:w-80 shadow-sm">
//             <figure>
//               <a href="https://www.honestjaggery.com/">
//                 <img
//                   src="1.png"
//                   alt="Shoes" />
//               </a>
//             </figure>
//             <div className="card-body bg-green-700 text-white items-center rounded">
//               <h1 className="card-title text-center">
//                 <a href="https://www.honestjaggery.com/" className="text-2xl font-bold">Honest Jaggery</a>
//                 {/* <div className="badge badge-secondary">NEW</div> */}
//               </h1>
//               {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//               <div className="card-actions justify-end">
//                 <div className="badge badge-outline">Fashion</div>
//                 <div className="badge badge-outline">Products</div>
//               </div> */}
//             </div>
//           </div>

//           <div className="card bg-base-100 w-65 md:w-70 lg:w-80 shadow-sm">
//             <figure>
//               <a href="https://citidentalhospital.com/">
//                 <img
//                   src="3.png"
//                   alt="Shoes" />
//               </a>
//             </figure>
//             <div className="card-body bg-green-700 text-white items-center rounded">
//               <h1 className="card-title text-center">
//                 <a href="https://citidentalhospital.com/" className="text-2xl font-bold">City Dental Hospital</a>
//                 {/* <div className="badge badge-secondary">NEW</div> */}
//               </h1>
//               {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//               <div className="card-actions justify-end">
//                 <div className="badge badge-outline">Fashion</div>
//                 <div className="badge badge-outline">Products</div>
//               </div> */}
//             </div>
//           </div>

//           <div className="card bg-base-100  w-65 md:w-70 lg:w-80 shadow-sm">
//             <figure>
//               <a href="https://b2bpunjab.com/jassal/index.php">
//                 <img
//                   src="2.png"
//                   alt="Shoes" />
//               </a>
//             </figure>
//             <div className="card-body bg-green-700 text-white items-center rounded">
//               <h1 className="card-title text-center">
//                 <a href="https://b2bpunjab.com/jassal/index.php" className="text-2xl font-bold">
//                   Jassal Engineers
//                 </a>
//               </h1>

//               {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
//               <div className="card-actions justify-end">
//                 <div className="badge badge-outline">Fashion</div>
//                 <div className="badge badge-outline">Products</div>
//               </div> */}
//             </div>
//           </div>

//         </div>

//         <div className="text-center text-4xl p-5">
//           {/* <h1>Coming Soon..</h1> */}
//         </div>
//         <div className="md:hidden">
//           <Slider {...SmSettings} className="overflow-hidden px-5">
//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768318343/1_vyxffl.mp4"
//                 // width="400"
//                 className="rounded-xl w-100 md:w-60"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768318504/6_n97emu.mp4"
//                 // width="400"
//                 className="rounded-xl w-100"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768318514/4_mccsot.mp4"
//                 // width="400"
//                 className="rounded-xl w-100 md:w-60"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768318747/2_pjfzjg.mp4"
//                 // width="400"
//                 className="rounded-xl w-100 md:w-60"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768318759/9_yuci7q.mp4"
//                 // width="400"
//                 className="rounded-xl w-100 md:w-60"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768318854/7_so7zgx.mp4"
//                 // width="400"
//                 className="rounded-xl w-100 md:w-60"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768318943/8_uhfet5.mp4"
//                 // width="400"
//                 className="rounded-xl w-100 md:w-60"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768319032/5_dxqdhn.mp4"
//                 // width="400"
//                 className="rounded-xl w-100 md:w-60"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768319164/3_thqbov.mp4"
//                 // width="400"
//                 className="rounded-xl w-100 md:w-60"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>
//           </Slider>
//         </div>
//         <div className="hidden md:block">
//           <Slider {...settings} className="overflow-hidden px-5">
//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768318343/1_vyxffl.mp4"
//                 // width="400"
//                 className="rounded-xl w-100"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768318504/6_n97emu.mp4"
//                 // width="400"
//                 className="rounded-xl w-100"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768318514/4_mccsot.mp4"
//                 // width="400"
//                 className="rounded-xl w-100"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768318747/2_pjfzjg.mp4"
//                 // width="400"
//                 className="rounded-xl w-100"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768318759/9_yuci7q.mp4"
//                 // width="400"
//                 className="rounded-xl w-100"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768318854/7_so7zgx.mp4"
//                 // width="400"
//                 className="rounded-xl w-100"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768318943/8_uhfet5.mp4"
//                 // width="400"
//                 className="rounded-xl w-100"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768319032/5_dxqdhn.mp4"
//                 // width="400"
//                 className="rounded-xl w-100"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1768319164/3_thqbov.mp4"
//                 // width="400"
//                 className="rounded-xl w-100"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>

//             <div>
//               <video
//                 src="https://res.cloudinary.com/dv81yfnes/video/upload/v1770554939/reel-1_Final_tqxgq4.mp4"
//                 // width="400"
//                 className="rounded-xl w-100"
//                 autoPlay
//                 muted
//                 loop
//                 playsInline
//               />
//             </div>
//           </Slider>
//         </div>
//         <CurvedLoop
//           marqueeText="Modern ✦ Web ✦ Experiences ✦ By ✦ Chirayu ✦"
//           speed={3}
//           curveAmount={500}
//           direction="right"
//           interactive={true}
//           className="custom-text-style"
//         />
//       </div >
//     </>
//   )
// }

// export default Projects
