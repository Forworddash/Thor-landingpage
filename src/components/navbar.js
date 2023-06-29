import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { useState } from "react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";

export default function App() {
  const collapseItems = [
    { id: "story", label: "Story" },
    { id: "signup", label: "Signup" },
    { id: "support", label: "Support" },
    // Add more items if needed
  ];

  const [activeItemId, setActiveItemId] = useState(null);

  const handleCollapseItemClick = (itemId) => {
    setActiveItemId(itemId);
  };

  const handleLinkClick = () => {
    setActiveItemId(null);
  };

  return (
    <div className="fixed top-0 w-full z-10">
      <Layout>
        <Navbar isBordered variant="sticky">
          <Navbar.Toggle showIn="xs" onClick={handleLinkClick} />
          <Navbar.Brand
            css={{
              "@xs": {
                w: "12%",
              },
            }}
          >
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs">
              Biltong
            </Text>
          </Navbar.Brand>
          <Navbar.Content
            enableCursorHighlight
            activeColor="warning"
            hideIn="xs"
            variant="highlight"
          >
            <Navbar.Link
              isActive={activeItemId === "story"}
              onClick={() => handleCollapseItemClick("story")}
              href="#story"
            >
              Story
            </Navbar.Link>
            <Navbar.Link
              isActive={activeItemId === "signup"}
              onClick={() => handleCollapseItemClick("signup")}
              href="#signup"
            >
              Signup
            </Navbar.Link>
            <Navbar.Link
              isActive={activeItemId === "support"}
              onClick={() => handleCollapseItemClick("support")}
              href="#support"
            >
              Support
            </Navbar.Link>
          </Navbar.Content>
          <Navbar.Content
            css={{
              "@xs": {
                w: "12%",
                jc: "flex-end",
              },
            }}
          >
            {/* Add your dropdown content here */}
          </Navbar.Content>
          <Navbar.Collapse disableAnimation>
            {collapseItems.map((item) => (
              <Navbar.CollapseItem
                key={item.id}
                activeColor="warning"
                isActive={activeItemId === item.id}
                onClick={() => handleCollapseItemClick(item.id)}
              >
                <Link
                  color="inherit"
                  css={{
                    minWidth: "100%",
                  }}
                  href={`#${item.id}`}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              </Navbar.CollapseItem>
            ))}
          </Navbar.Collapse>
        </Navbar>
      </Layout>
    </div>
  );
}

// // old navbar

// // import React from "react";
// // import "../tailwind.css";

// // const Navbar = () => {
// //   const handleSmoothScroll = (e, targetId) => {
// //     e.preventDefault();

// //     const targetElement = document.getElementById(targetId);
// //     if (targetElement) {
// //       window.scrollTo({
// //         top: targetElement.offsetTop,
// //         behavior: "smooth",
// //       });
// //     }
// //   };

// //   return (
// //     <div className="fixed w-full bg-black opacity-75 z-10 py-8">
// //       <nav>
// //         <ul className="flex justify-evenly text-2xl text-white font-bold">
// //           <li className="hover:opacity-50">
// //             <a href='#story' onClick={(e) => handleSmoothScroll(e, 'story')}>
// //               Story
// //             </a>
// //           </li>
// //           <li className="hover:opacity-50">
// //             <a href='#signup' onClick={(e) => handleSmoothScroll(e, 'signup')}>
// //               Signup
// //             </a>
// //           </li>
// //           <li className="hover:opacity-50">
// //             <a href='#support' onClick={(e) => handleSmoothScroll(e, 'support')}>
// //               Support
// //             </a>
// //           </li>
// //         </ul>
// //       </nav>
// //     </div>
// //   );
// // };

// // export default Navbar;
