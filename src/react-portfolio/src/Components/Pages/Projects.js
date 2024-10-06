import React from "react";
import MemoryImage from './../../Assets/Memory.webp';
import KoiFishImage from './../../Assets/KoiFish.webp';
import LuckyShrubImage from './../../Assets/LuckyShrub.webp';
import './../../CSS/Projects.css';
import {Link} from 'react-router-dom';

const Projects = () => {
    return (
        <section>
            {/* CONVERT THIS TO A METHOD THAT PRODUCES EACH PROJECT */}
            <Link to='/NewProject'>
                <article className="project1">
                    <div className="card">
                        <img src={MemoryImage} />
                        <label>Memory</label>
                    </div>
                    {/* <a href="./NewProject.html" onclick="selectFutureProject(0)"></a> */}
                </article>
            </Link>
            <Link to='/NewProject'>
                <article className="project2">
                    <div className="card">
                        <img src={KoiFishImage} />
                        <label>Koi Ponds</label>
                    </div>
                    {/* <a href="./NewProject.html" onclick="selectFutureProject(1)"></a> */}
                </article>
            </Link>
            <Link to='/NewProject'>
                <article className="project3">
                    <div className="card">
                        <img src={LuckyShrubImage} />
                        <label>Lucky Shrub Garden</label>
                    </div>
                    {/* <a href="./NewProject.html" onclick="selectFutureProject(2)"></a> */}
                </article>
            </Link>
        </section>
    )
}

export default Projects;