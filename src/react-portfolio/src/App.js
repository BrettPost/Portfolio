import logo from './logo.svg';
import Navbar from './Components/Nav/Navbar';
import Footer from './Components/Footer/Footer';
import './App.css';
import {Routes, Link, Route, Navigate} from 'react-router-dom';
import HomePage from './Components/Pages/HomePage';
import ProjectPage from './Components/Pages/ProjectsPage';
import AboutPage from './Components/Pages/AboutPage';
import NewProject from './Components/Pages/NewProjectPage';
import { Children } from 'react';

function App() {
  return (
    <div className="App">
      <header className="">
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/Home' element={<Navigate to="/" />} />
          <Route path='/Projects' element={<ProjectPage />}>
            {/* <Route path='NewProject' element={<NewProject />} /> */}
          </Route>
          <Route path='/About' element={<AboutPage />} />
          <Route path='NewProject' element={<NewProject name={Children}/>} />
          <Route path="*" element={null} />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
