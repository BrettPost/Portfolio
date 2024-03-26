/*
    Function updates the current selected nav link.
*/
window.addEventListener("load", updateNav, true); 
function updateNav() {
    const navList = ["index", "projects"];
    const pageId = location.pathname.split("/").slice(-1).toLocaleString().split(".")[0].toLocaleString();

    navList.forEach(element => {
        if (element !== pageId) { 
            document.getElementById(pageId).style.borderStyle = "none";
        }
    });
    document.getElementById(pageId).style.borderBottom = "1px solid #AAF0D1";
};

// Keep order consistant with order of site
const GitHubProjects = [
    {name: 'Memory', repo: 'https://github.com/BrettPost/CardMatching'},
    {name: 'Koi Ponds', repo: 'https://github.com/BrettPost/Koi-Ponds'},
    {name: 'Lucky Shrub Garden', repo: 'https://github.com/BrettPost/LuckyShrubGarden'}
];

function selectFutureProject(num) {
    window.localStorage.setItem('projectNum', num);
}

function currentFutureProject() {
    let projectLink = document.getElementById('ProjectHeader');
    let project = GitHubProjects[window.localStorage.getItem('projectNum')];

    projectLink.innerText = project.name;
    projectLink.setAttribute('href', project.repo);
}