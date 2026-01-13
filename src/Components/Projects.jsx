import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CurvedLoop from "./CurvedLoop";
import BlurText from "@/component/BlurText";

function Projects() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  var SmSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  return (
    <>
      <div className="h-full w-[100%]  pb-5">
        <h1 id="projectsTxt" className="text-2xl p-16 mx-3">My Latest <span className="text-orange-500">Projects</span></h1>

        <div className="container-2xl p-5 place-items-center grid grid-cols-1 md:grid-cols-4 gap-5">

          <div className="card bg-base-100 w-65 md:w-96 shadow-sm text-center">
            <figure>
              <a href="http://mypurepantry.com/">
                <img
                  src="4.png"
                  alt="Shoes" />
              </a>
            </figure>
            <div className="card-body">
              <h1 className="card-title">
                <a href="http://mypurepantry.com/">My Pure Pantry</a>
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h1>
              {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div> 
              </div> */}
            </div>
          </div>

          <div className="card bg-base-100 w-65 md:w-96 shadow-sm">
            <figure>
              <a href="https://www.honestjaggery.com/">
                <img
                  src="1.png"
                  alt="Shoes" />
              </a>
            </figure>
            <div className="card-body">
              <h1 className="card-title text-center">
                <a href="https://www.honestjaggery.com/" className="text-center">Honest Jaggery</a>
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h1>
              {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div> */}
            </div>
          </div>

          <div className="card bg-base-100 w-65 md:w-96 shadow-sm">
            <figure>
              <a href="https://citidentalhospital.com/">
                <img
                  src="2.png"
                  alt="Shoes" />
              </a>
            </figure>
            <div className="card-body">
              <h1 className="card-title text-center">
                <a href="https://citidentalhospital.com/" className="text-center">City Dental Hospital</a>
                {/* <div className="badge badge-secondary">NEW</div> */}
              </h1>
              {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div> */}
            </div>
          </div>

          <div className="card bg-base-100  w-65 md:w-96 shadow-sm">
            <figure>
              <a href="https://b2bpunjab.com/jassal/index.php">
                <img
                  src="3.png"
                  alt="Shoes" />
              </a>
            </figure>
            <div className="card-body">
              <a href="https://b2bpunjab.com/jassal/index.php">
                <h1 className="card-title text-center">
                  Jassal Engineers
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h1>
              </a>
              {/* <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div>
                <div className="badge badge-outline">Products</div>
              </div> */}
            </div>
          </div>

        </div>

        <div className="text-center text-4xl p-5">
          {/* <h1>Coming Soon..</h1> */}
        </div>
        <div className="md:hidden">
          <Slider {...SmSettings} className="overflow-hidden px-5">
            <div>
              <iframe
                src="https://www.youtube.com/embed/qGzl0ktufhM?autoplay=1&mute=1&loop=1&playlist=qGzl0ktufhM&controls=0&modestbranding=1"
                width="400"
                height="700"
                title="YouTube Shorts"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              />
            </div>

            <div>
              <iframe
                src="https://www.youtube.com/embed/0W75hirLw1U?autoplay=1&mute=1&loop=1&playlist=0W75hirLw1U&controls=0&modestbranding=1"
                width="400"
                height="700"
                title="YouTube Shorts"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              />
            </div>

            <div>
              <iframe
                src="https://www.youtube.com/embed/WtYcCE4ad0k?autoplay=1&mute=1&loop=1&playlist=WtYcCE4ad0k&controls=0&modestbranding=1"
                width="400"
                height="700"
                title="YouTube Shorts"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              />
            </div>

            <div>
              <iframe
                src="https://www.youtube.com/embed/E2xDkdmvo9E?autoplay=1&mute=1&loop=1&playlist=E2xDkdmvo9E&controls=0&modestbranding=1"
                width="400"
                height="700"
                title="YouTube Shorts"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              />
            </div>

          </Slider>
        </div>
        <div className="hidden md:block">
          <Slider {...settings} className="overflow-hidden px-5">
            <div>
              <iframe
                src="https://www.youtube.com/embed/qGzl0ktufhM?autoplay=1&mute=1&loop=1&playlist=qGzl0ktufhM&controls=0&modestbranding=1"
                width="400"
                height="700"
                title="YouTube Shorts"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              />
            </div>

            <div>
              <iframe
                src="https://www.youtube.com/embed/0W75hirLw1U?autoplay=1&mute=1&loop=1&playlist=0W75hirLw1U&controls=0&modestbranding=1"
                width="400"
                height="700"
                title="YouTube Shorts"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              />
            </div>

            <div>
              <iframe
                src="https://www.youtube.com/embed/WtYcCE4ad0k?autoplay=1&mute=1&loop=1&playlist=WtYcCE4ad0k&controls=0&modestbranding=1"
                width="400"
                height="700"
                title="YouTube Shorts"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              />
            </div>

            <div>
              <iframe
                src="https://www.youtube.com/embed/E2xDkdmvo9E?autoplay=1&mute=1&loop=1&playlist=E2xDkdmvo9E&controls=0&modestbranding=1"
                width="400"
                height="700"
                title="YouTube Shorts"
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="rounded-lg"
              />
            </div>

          </Slider>
        </div>
        <CurvedLoop
          marqueeText="Modern ✦ Web ✦ Experiences ✦ By ✦ Chirayu ✦"
          speed={3}
          curveAmount={500}
          direction="right"
          interactive={true}
          className="custom-text-style"
        />
      </div>
    </>
  )
}

export default Projects
