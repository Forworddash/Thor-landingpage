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
    <div className="fixed left-0 top-1/3 hidden lg:block xl:block">
      <nav>
        <ul className="space-y-12 relative mx-4 text-2xl text-white font-bold border-r-2 border-white pr-4">
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