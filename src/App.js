import React from 'react';
import './tailwind.css';
import './App.css';
import Story from './components/story';
import Signup from './components/signup';
import Support from './components/support';
import Footer from './components/footer';
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App text-white bg-gradient-to-r from-darkBlue to-darkRed"> {/* bg-gradient-to-r from-lavender to-mindaro cool-background */}
      <div className=''>
          <Navbar></Navbar>
      </div>
      <div className="container mx-auto px-12 space-y-12">
        
        <div className="">
          <Story
            imageUrl={'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=1380&t=st=1687539353~exp=1687539953~hmac=bdfdfdda897fefc0619df601b60c9fd1406fccc6810b82da2d7fa03e04a83903'}
            title={'Our Story'}
            text={'Savanna Biltong was started in 2022 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet justo donec enim diam. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Dignissim suspendisse in est ante in nibh mauris. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Dolor purus non enim praesent elementum facilisis leo. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Neque egestas congue quisque egestas diam. Pharetra convallis posuere morbi leo urna molestie at elementum eu.'}
          />
        </div>

        <div className="">
          <Signup
            title={'Join us at our event!'}
            text={"On July 13th, Thursday at 102 main st. Join us at the launch of our new company as we set up our first display. Come and enjoy some tasty Biltong! We'll notify you on the day."}
          />
        </div>

        <div className="">
          <Support
            title={'Reserve some Biltong!'}
            text={'You can buy your Biltong here to reserve your sweeeeet and juiiiicy snacks!'}
          />
        </div>
        <div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}

export default App;
