import logo from './logo.svg';
import Navbar from './Components/Nav/Navbar';
import Footer from './Components/Footer/Footer';
import './App.css';
import {Routes, Link, Route, Navigate} from 'react-router-dom';
import Home from './Components/Pages/Home';
import Projects from './Components/Pages/Projects';
import About from './Components/Pages/About';

function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<Home name="Brett" />} />
          <Route path='/Home' element={<Navigate to="/" />} />
          <Route path='/Projects' element={<Projects />} />
          <Route path='/About' element={<About />} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
