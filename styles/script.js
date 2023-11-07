let aboutIsShown = false;
let accomplishmentsIsShown = false;
const aboutshowButton = document.getElementById("aboutshowButton");
const abouthiddenElement = document.getElementById("about");
const accomplishmentsshowButton = document.getElementById("accomplishmentsshowButton");
const accomplishmentshiddenElement = document.getElementById("accomplishments");
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

aboutshowButton.addEventListener("click", function() {
  if (accomplishmentsIsShown) {
    showAccomplishments(false);
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
  if (accomplishmentsIsShown) {
    showAccomplishments(false);
  } else {
    showAccomplishments(true);
  }
});