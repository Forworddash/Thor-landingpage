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
    <div className="fixed left-0 top-1/3">
      <nav>
        <ul className="space-y-12 relative border-r-2 border-gray-500 pr-4">
          <li>
            <a href='#story' onClick={(e) => handleSmoothScroll(e, 'story')}>
              Story
            </a>
          </li>
          <li>
            <a href='#signup' onClick={(e) => handleSmoothScroll(e, 'signup')}>
              Signup
            </a>
          </li>
          <li>
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
