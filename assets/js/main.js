let projects = [
  [
    "Alphabetical Guide to Washington",
    "I report the results of a of exploratory data analysis on the Alphabetical Guide to Washington. The list accompanied Tim Fish's tasting report in the September 2020 issue of Wine Spectator.",
    "https://github.com/ewotawa/wines_of_washington",
    "https://www.linkedin.com/pulse/grapevine-plots-analysis-wine-spectators-alphabetical-wotawa"
  ],
  [
    "Alphabetical Guide to Spain",
    "I report on the results of exploratory data analysis, hypothesis testing, and regression analysis on the Alphabetical Guide to Spain. The list accompanied Thomas Matthew's article Sun and Shadows in the October 15, 2020 issue of Wine Spectator.",
    "https://github.com/ewotawa/wines_of_spain",
    "https://www.linkedin.com/pulse/grapevine-plots-analysis-wine-spectators-alphabetical-wotawa-1c"
  ]
];

for (i = 0; i < projects.length; i++) {
console.log(projects[i][0]);
}

function addProject(projects) {
for (project in projects) {

  console.log(project);

  /* create a new element to hold the project */
  let article = document.createElement("article");

  /* add style tags to article */
  article.setAttribute("class", "project-tile");

  /* add header to article */
  let header = document.createElement("h3");
  header.setAttribute("class", "flex-item");
  let headerText = document.createTextNode(projects[project][0]);
  header.appendChild(headerText);
  article.appendChild(header);

  /* add description to article */
  let p = document.createElement("p");
  p.setAttribute("class", "flex-item");
  let pText = document.createTextNode(projects[project][1]);
  p.appendChild(pText);
  article.appendChild(p);

  /* add github link to article */
  let github = document.createElement("a");
  github.setAttribute("class", "flex-item");
  let githubIcon = document.createElement("i");
  githubIcon.setAttribute("class", "fab fa-github");
  github.appendChild(githubIcon);
  let githubText = document.createTextNode(' GitHub');
  github.appendChild(githubText);
  github.setAttribute("href",  projects[project][2]);
  github.setAttribute("target", "_blank");
  article.appendChild(github);

  /* add codepen link to article */
  let codepen = document.createElement("a");
  codepen.setAttribute("class", "flex-item");
  let codepenIcon = document.createElement("i");
  codepenIcon.setAttribute("class", "fab fa-linkedin");
  codepen.appendChild(codepenIcon);
  let codepenText = document.createTextNode(' LinkedIn');
  codepen.appendChild(codepenText);
  codepen.setAttribute("href",  projects[project][3]);
  codepen.setAttribute("target", "_blank");
  article.appendChild(codepen);

  console.log(article);

  /* add to the DOM */
  var container = document.getElementById("projects");

  console.log(container);

  container.appendChild(article);
}

}

document.body.onload = addProject(projects);
