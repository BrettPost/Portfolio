import React, { Children } from "react";
import Project from './../Projects/Project';
import MemoryImage from './../../Assets/Memory.webp';
import KoiFishImage from './../../Assets/KoiFish.webp';
import LuckyShrubImage from './../../Assets/LuckyShrub.webp';

const ProjectPage = () => {
    return (
        <section>
            {/* CONVERT THIS TO A METHOD THAT Loops through project list */}
            <Project name='Memory' gridNumber='1' image={MemoryImage} />
            <Project name='Koi Ponds' gridNumber='2' image={KoiFishImage} />
            <Project name='Lucky Shrub Garden' gridNumber='3' image={LuckyShrubImage} />
        </section>
    )
}

export default ProjectPage;