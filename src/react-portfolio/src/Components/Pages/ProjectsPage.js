import React from "react";
import Project from './../Projects/Project';
import MemoryImage from './../../Assets/Memory.webp';
import KoiFishImage from './../../Assets/KoiFish.webp';
import LuckyShrubImage from './../../Assets/LuckyShrub.webp';

const ProjectPage = () => {
    return (
        <section>
            {/* CONVERT THIS TO A METHOD THAT Loops through project list */}
            <Project name='Memory' image={MemoryImage} />
            <Project name='Koi Ponds' image={KoiFishImage} />
            <Project name='Lucky Shrub Garden' image={LuckyShrubImage} />
        </section>
    )
}

export default ProjectPage;