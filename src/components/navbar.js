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

