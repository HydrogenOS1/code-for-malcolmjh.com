let aboutIsShown = false;
let accomplishmentsIsShown = false;
let projectsIsShown = false;
let skillsIsShown = false;
const aboutshowButton = document.getElementById("aboutshowButton");
const abouthiddenElement = document.getElementById("about");
const accomplishmentsshowButton = document.getElementById("accomplishmentsshowButton");
const accomplishmentshiddenElement = document.getElementById("accomplishments");
const projectsshowButton = document.getElementById("projectshowButton");
const projectshiddenElement = document.getElementById("projects");
const skillsshowButton = document.getElementById("skillsshowButton");
const skillshiddenElement = document.getElementById("skills");
const showAbout = (shouldShow) => {
  if (shouldShow) {
    abouthiddenElement.style.display = "block";
    aboutIsShown = true
  } else {
    abouthiddenElement.style.display = "none";
    aboutIsShown = false
  }
}
const showAccomplishments = (shouldShow) => {
  if (shouldShow) {
    accomplishmentshiddenElement.style.display = "block";
    accomplishmentsIsShown = true
  } else {
    accomplishmentshiddenElement.style.display = "none";
    accomplishmentsIsShown = false
  }
}
const showProjects = (shouldShow) => {
  if (shouldShow) {
    projectshiddenElement.style.display = "block";
    projectsIsShown = true
  } else {
    projectshiddenElement.style.display = "none";
    projectsIsShown = false
  }
}
const showSkills = (shouldShow) => {
  if (shouldShow) {
    skillshiddenElement.style.display = "block";
    skillsIsShown = true
  } else {
    skillshiddenElement.style.display = "none";
    skillsIsShown = false
  }
}
//----------------------------------------------------------//
aboutshowButton.addEventListener("click", function() {
  if (accomplishmentsIsShown) {
    showAccomplishments(false);
  }
  if (projectsIsShown) {
    showProjects(false);
  }
  if (skillsIsShown) {
    showSkills(false);
  }
  if (aboutIsShown) {
    showAbout(false);
  } else {
    showAbout(true);
  }
});
accomplishmentsshowButton.addEventListener("click", function() {
  if (aboutIsShown) {
    showAbout(false);
  }
  if (projectsIsShown) {
    showProjects(false);
  }
  if (skillsIsShown) {
    showSkills(false);
  }
  if (accomplishmentsIsShown) {
    showAccomplishments(false);
  } else {
    showAccomplishments(true);
  }
});
projectsshowButton.addEventListener("click", function() {
  if (accomplishmentsIsShown) {
    showAccomplishments(false);
  }
  if (aboutIsShown) {
    showAbout(false);
  }
  if (skillsIsShown) {
    showSkills(false);
  }
  if (projectsIsShown) {
    showProjects(false);
  } else {
    showProjects(true);
  }
});
skillsshowButton.addEventListener("click", function() {
  if (accomplishmentsIsShown) {
    showAccomplishments(false);
  }
  if (aboutIsShown) {
    showAbout(false);
  }
  if (projectsIsShown) {
    showProjects(false);
  }
  if (skillsIsShown) {
    showSkills(false);
  } else {
    showSkills(true);
  }
});