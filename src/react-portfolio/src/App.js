import logo from './logo.svg';
import Navbar from './Components/Nav/Navbar';
import './App.css';
import {Routes, Link, Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import About from './Components/Pages/About';

function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar />
        <Routes>
          <Route path='/Home' element={<Home name="Brett" />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/About' element={<About />} />
        </Routes>
        
      </header>
    </div>
  );
}

export default App;
