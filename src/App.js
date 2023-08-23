
import './App.css';

import { BrowserRouter as Router, Route , Routes} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import CreatePost from './components/CreatePost';
import Navbar from './components/Navbar';
import Content from './components/Content';

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="about" element={<About/>} />
          <Route exact path="createpost" element={<CreatePost/>} />
          <Route exact path="memes" element={<Content />} />
        </Routes>
      <Footer/>
    </div>
  );
}

export default App;
