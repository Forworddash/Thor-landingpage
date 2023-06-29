// import React from "react";
// import "../tailwind.css";

// const Navbar = () => {
//   const handleSmoothScroll = (e, targetId) => {
//     e.preventDefault();

//     const targetElement = document.getElementById(targetId);
//     if (targetElement) {
//       window.scrollTo({
//         top: targetElement.offsetTop,
//         behavior: "smooth",
//       });
//     }
//   };

//   return (
//     <div className="fixed w-full bg-black opacity-75 z-10 py-8">
//       <nav>
//         <ul className="flex justify-evenly text-2xl text-white font-bold">
//           <li className="hover:opacity-50">
//             <a href='#story' onClick={(e) => handleSmoothScroll(e, 'story')}>
//               Story
//             </a>
//           </li>
//           <li className="hover:opacity-50">
//             <a href='#signup' onClick={(e) => handleSmoothScroll(e, 'signup')}>
//               Signup
//             </a>
//           </li>
//           <li className="hover:opacity-50">
//             <a href='#support' onClick={(e) => handleSmoothScroll(e, 'support')}>
//               Support
//             </a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;
// import { Navbar, Dropdown, Button, Link, Text } from "@nextui-org/react";
// import { Layout } from "./Layout.js";
// import { AcmeLogo } from "./AcmeLogo.js";
// import { icons } from "./Icons.js";

// export default function App() {
//   return (
//     <Layout>
//       <Navbar isBordered variant="sticky">
//         <Navbar.Brand>
//           <AcmeLogo />
//           <Text b color="inherit" hideIn="xs">
//             ACME
//           </Text>
//         </Navbar.Brand>
//         <Navbar.Content
//           enableCursorHighlight
//           activeColor="secondary"
//           hideIn="xs"
//           variant="underline"
//         >
//           {/* <Dropdown isBordered>
//             <Navbar.Item>
//               <Dropdown.Button
//                 auto
//                 light
//                 css={{
//                   px: 0,
//                   dflex: "center",
//                   svg: { pe: "none" },
//                 }}
//                 iconRight={icons.chevron}
//                 ripple={false}
//               >
//                 Features
//               </Dropdown.Button>
//             </Navbar.Item>
//             <Dropdown.Menu
//               aria-label="ACME features"
//               css={{
//                 $$dropdownMenuWidth: "340px",
//                 $$dropdownItemHeight: "70px",
//                 "& .nextui-dropdown-item": {
//                   py: "$4",
//                   // dropdown item left icon
//                   svg: {
//                     color: "$secondary",
//                     mr: "$4",
//                   },
//                   // dropdown item title
//                   "& .nextui-dropdown-item-content": {
//                     w: "100%",
//                     fontWeight: "$semibold",
//                   },
//                 },
//               }}
//             >
//               <Dropdown.Item
//                 key="autoscaling"
//                 showFullDescription
//                 description="ACME scales apps to meet user demand, automagically, based on load."
//                 icon={icons.scale}
//               >
//                 Autoscaling
//               </Dropdown.Item>
//               <Dropdown.Item
//                 key="usage_metrics"
//                 showFullDescription
//                 description="Real-time metrics to debug issues. Slow query added? We’ll show you exactly where."
//                 icon={icons.activity}
//               >
//                 Usage Metrics
//               </Dropdown.Item>
//               <Dropdown.Item
//                 key="production_ready"
//                 showFullDescription
//                 description="ACME runs on ACME, join us and others serving requests at web scale."
//                 icon={icons.flash}
//               >
//                 Production Ready
//               </Dropdown.Item>
//               <Dropdown.Item
//                 key="99_uptime"
//                 showFullDescription
//                 description="Applications stay on the grid with high availability and high uptime guarantees."
//                 icon={icons.server}
//               >
//                 +99% Uptime
//               </Dropdown.Item>
//               <Dropdown.Item
//                 key="supreme_support"
//                 showFullDescription
//                 description="Overcome any challenge with a supporting team ready to respond."
//                 icon={icons.user}
//               >
//                 +Supreme Support
//               </Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown> */}
//           <Navbar.Link isActive href="#">
//             Customers
//           </Navbar.Link>
//           <Navbar.Link href="#">Pricing</Navbar.Link>
//           <Navbar.Link href="#">Company</Navbar.Link>
//         </Navbar.Content>
//         {/* <Navbar.Content>
//           <Navbar.Link color="inherit" href="#">
//             Login
//           </Navbar.Link>
//           <Navbar.Item>
//             <Button auto flat as={Link} href="#">
//               Sign Up
//             </Button>
//           </Navbar.Item>
//         </Navbar.Content> */}
//       </Navbar>
//     </Layout>
//   );
// }
import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import { AcmeLogo } from "./AcmeLogo.js";

export default function App() {
  const collapseItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  return (
    <Layout>
      <Navbar isBordered variant="sticky">
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <AcmeLogo />
          <Text b color="inherit" hideIn="xs">
            ACME
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="warning"
          hideIn="xs"
          variant="highlight"
        >
          <Navbar.Link href="#">Features</Navbar.Link>
          <Navbar.Link isActive href="#">
            Customers
          </Navbar.Link>
          <Navbar.Link href="#">Pricing</Navbar.Link>
          <Navbar.Link href="#">Company</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="warning"
                  size="md"
                  src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="warning"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  Signed in as
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  zoey@example.com
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                My Settings
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                Analytics
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                Help & Feedback
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                Log Out
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Navbar.Content>
        <Navbar.Collapse disableAnimation>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="warning"
              css={{
                color: index === collapseItems.length - 1 ? "$error" : "",
              }}
              isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
