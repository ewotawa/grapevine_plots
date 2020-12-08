let projects = [
  [
    "Analysis of Wine Spectator's Alphabetical Guide to Washington",
    "I report the results of a series of exploratory data analysis methods on the list that accompanied the article The Alphabetical Guide to Washington by Tim Fish from the September 2020 issue of Wine Spectator. The list includes 418 wines from the Washington State American Viticultural Areas (AVAs), with vintages between 2014 and 2019.",
    "https://github.com/ewotawa/wines_of_washington",
    "#"
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
