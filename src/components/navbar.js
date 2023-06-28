import React from "react";
import "../tailwind.css";

const Navbar = () => {
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed w-full bg-black opacity-75 z-10 py-8">
      <nav>
        <ul className="flex justify-evenly text-2xl text-white font-bold">
          <li className="hover:opacity-50">
            <a href='#story' onClick={(e) => handleSmoothScroll(e, 'story')}>
              Story
            </a>
          </li>
          <li className="hover:opacity-50">
            <a href='#signup' onClick={(e) => handleSmoothScroll(e, 'signup')}>
              Signup
            </a>
          </li>
          <li className="hover:opacity-50">
            <a href='#support' onClick={(e) => handleSmoothScroll(e, 'support')}>
              Support
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
