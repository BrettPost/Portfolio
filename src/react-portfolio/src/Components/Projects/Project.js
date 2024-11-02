import React from "react";
import {Link, Outlet} from 'react-router-dom';
import './../../CSS/Projects.css';

const Project = (props) => {
    return (
        
            <article className={"project" + props.gridNumber + " "}>
                <Link to='NewProject' className="gridItem">
                    <div className="card">
                        <img src={props.image} />
                        <label>{props.name}</label>
                    </div>
                    {/* <a href="./NewProject.html" onclick="selectFutureProject(0)"></a> */}
                </Link>

                <Outlet />
            </article>
    )
}

export default Project;