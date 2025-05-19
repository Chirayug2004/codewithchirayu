

function Navbar() {
  return (
 <>
 <div><div className="navbar z-99 fixed bg-green-900 text-white shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-green-900 text-white rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Project</a></li>
      </ul>
    </div>
    <img className="h-10" src='/Web Logo.png'/>
    <a className="text-sm font-bold mx-2 md:text-xl">CodeWithChirayu<span className="text-orange-400 text-2xl font-extrabold">.</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li className="hover:text-1xl hover:underline-offset-8 hover:underline hover:underline-white"><a href="#home">Home</a></li>
      <li className="hover:text-1xl hover:underline-offset-8 hover:underline hover:underline-white"><a href="#services">Services</a></li>
      <li className="hover:text-1xl hover:underline-offset-8 hover:underline hover:underline-white"><a href="#about">About</a></li>
      <li className="hover:text-1xl hover:underline-offset-8 hover:underline hover:underline-white"><a href="#projects">Project</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    {/*<a className="btn rounded-full">Hire Me</a>*/}
  </div>
</div>
</div>
 </>
  )
}

export default Navbar
