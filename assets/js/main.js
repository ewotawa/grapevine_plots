let projects = [
  [
    "Top 100 Wines 1988-2020",
    "February 8, 2021 🍇 I report on the results of exploratory data analysis on Wine Spectator's Top 100 Wine lists from 1988 to 2020.",
    "https://github.com/ewotawa/top_100_wines_2020",
    "https://www.linkedin.com/pulse/grapevine-plots-wine-spectators-top-100-wines-1988-2020-wotawa"
  ],[
    "Alphabetical Guide to Spain",
    "December 24, 2020 🍇 I report on the results of exploratory data analysis, hypothesis testing, and regression analysis on the Alphabetical Guide to Spain. The list accompanied Thomas Matthew's article Sun and Shadows in the October 15, 2020 issue of Wine Spectator.",
    "https://github.com/ewotawa/wines_of_spain",
    "https://www.linkedin.com/pulse/grapevine-plots-analysis-wine-spectators-alphabetical-wotawa-1c"
  ],[
    "Alphabetical Guide to Washington",
    "December 9, 2020 🍇 I report the results of a of exploratory data analysis on the Alphabetical Guide to Washington. The list accompanied Tim Fish's tasting report in the September 2020 issue of Wine Spectator.",
    "https://github.com/ewotawa/wines_of_washington",
    "https://www.linkedin.com/pulse/grapevine-plots-analysis-wine-spectators-alphabetical-wotawa"
  ]
];

/*
for (i = 0; i < projects.length; i++) {
console.log(projects[i][0]);
}
*/

function addProject(projects) {
for (project in projects) {

  /*
  console.log(project);
  */

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
  /*
  console.log(p);
  */

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

  /* add linkedin link to article */
  let linkedin = document.createElement("a");
  linkedin.setAttribute("class", "flex-item");
  let linkedinIcon = document.createElement("i");
  linkedinIcon.setAttribute("class", "fab fa-linkedin");
  linkedin.appendChild(linkedinIcon);
  let linkedinText = document.createTextNode(' LinkedIn');
  linkedin.appendChild(linkedinText);
  linkedin.setAttribute("href",  projects[project][3]);
  linkedin.setAttribute("target", "_blank");
  article.appendChild(linkedin);

  /*
  console.log(article);
  *.

  /* add to the DOM */
  var container = document.getElementById("articles");

  /*
  console.log(container);
  */

  container.appendChild(article);
}

}

document.body.onload = addProject(projects);
