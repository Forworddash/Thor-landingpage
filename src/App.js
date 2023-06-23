import logo from "./logo.svg";
// import "./tailwind.css";
import "./tailwind.css";
import "./App.css";
import Story from "./components/story";
import Signup from "./components/signup";
import Support from "./components/support";




function App() {
  return (
    <div className="App">
      
      <div className="">
        <Story imageUrl={'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=1380&t=st=1687539353~exp=1687539953~hmac=bdfdfdda897fefc0619df601b60c9fd1406fccc6810b82da2d7fa03e04a83903'} title={'Our Story'} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet justo donec enim diam. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Dignissim suspendisse in est ante in nibh mauris. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Dolor purus non enim praesent elementum facilisis leo. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Neque egestas congue quisque egestas diam. Pharetra convallis posuere morbi leo urna molestie at elementum eu.'}></Story>
      </div>
    
      <div>
        <Signup title={'Join us at our event!'} text={'On July 13th, Thursday at 102 main st. Join us at the launch of our new company as we set up our first display. Come and enjoy some tasty Biltong!'}></Signup>
      </div>

      <div>
        <Support text={'hello'}></Support>
      </div>


    </div>
  );
}

export default App;
