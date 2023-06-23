import logo from "./logo.svg";
// import "./tailwind.css";
import "./tailwind.css";
import "./App.css";
import Story from "./components/story";




function App() {
  return (
    <div className="App">
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
      
      <div className="">
        <Story text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Maecenas pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet justo donec enim diam. Sed elementum tempus egestas sed sed risus pretium quam vulputate. Dignissim suspendisse in est ante in nibh mauris. Nec tincidunt praesent semper feugiat nibh sed pulvinar. Dolor purus non enim praesent elementum facilisis leo. Sed viverra tellus in hac habitasse platea dictumst vestibulum rhoncus. Neque egestas congue quisque egestas diam. Pharetra convallis posuere morbi leo urna molestie at elementum eu.'}></Story>
      </div>
    
    </div>
  );
}

export default App;
