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