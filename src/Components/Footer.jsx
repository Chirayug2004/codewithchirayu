import webLogo from '/Web Logo.png'
import { FaInstagram, FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 px-6 py-10 border-t">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="flex-1">
          <h2 className="text-4xl font-semibold mb-2">
            Let's <span className="text-orange-500">Connect</span> Here
          </h2>
          <div className="flex items-center mb-4">
            <img className="" src={webLogo} alt="" />
            <div className="ml-3">
              <p className="font-bold text-1xl">CodeWithChirayu<span className='text-amber-500 text-1xl'>.</span></p>
              <p className="text-sm">
                I am doing BCA from Indira Gandhi National Open University (IGNOU), I am a frontend dev. What can I do for you?
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="flex gap-4 text-lg">
            <a href="https://www.instagram.com/codewithchirayu/" className="hover:text-orange-500"><FaInstagram /></a>
            <a href="#" className="hover:text-orange-500"><FaFacebookF /></a>
            <a href="https://github.com/Chirayug2004" className="hover:text-orange-500"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/chirayu-ghai-18977024a/" className="hover:text-orange-500"><FaLinkedinIn /></a>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-orange-500 mb-3">Navigation</h3>
          <ul className="space-y-2">
            <li><a href="#home" className="hover:text-orange-500">Home</a></li>
            <li><a href="#services" className="hover:text-orange-500">Services</a></li>
            <li><a href="#about" className="hover:text-orange-500">About</a></li>
            <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer
