console.log(
  "Don't worry about that font sanitizer error, it's completely harmless\n"
);
// validating Email input
const reg = {
  email: /^([^@]+)@(.+)\.(.+)$/i, //And send a confirmation Email anyways
};
var errorPara = document.querySelector(".errorPara");
var suggestionPara = document.querySelector(".suggestionPara");
var suggestedPara = document.querySelector(".suggested");
const validate = (field, regEx) => {
  errorPara = document.querySelector(".errorPara");
  suggestionPara = document.querySelector(".suggestionPara");
  suggestedPara = suggestionPara.querySelector(".suggested");
  // Mailcheck.run({
  //   // If there is a suggestion
  //   email: field.value,
  //   suggested: function (suggestion) {
  //     // Show the suggestion and change border color
  //     suggestedPara.innerHTML = `${suggestion.full}?`;
  //     suggestionPara.style.display = "block";
  //     field.style.border = "4px solid #b2001f";
  //     errorPara.style.display = "none";
  //     // Clicking the suggestion solves the problem
  //     suggestedPara.addEventListener("click", () => {
  //       errorPara.style.display = "none";
  //       field.value = suggestion.full;
  //       suggestionPara.style.display = "none";
  //       field.style.border = "2px solid var(--tertiary-clr)";
  //     });
  //   },
  //   empty: function () {
  //     //If there are no suggestions, check the RegEx
  //     suggestionPara.style.display = "none";
  //     if (regEx.test(field.value)) {
  //       // If the Email is valid
  //       errorPara.style.display = "none";
  //       field.style.border = "2px solid var(--tertiary-clr;";
  //     } else {
  //       errorPara.style.display = "block";
  //       field.style.border = "4px solid #b2001f";
  //     }
  //   },
  // });ERR
};
const emailInput = document.querySelector(`input[type="email"]`);
emailInput.addEventListener("blur", () => {
  if (emailInput.value != "") validate(emailInput, reg.email);
  else {
    errorPara.style.display = "none";
    suggestionPara.style.display = "none";
  }
});

//themes

// Include CSS file
const theme = ["halloween"];
const themeIndex = 0;
function removeCSS() {
  var head = document.getElementsByTagName("head")[themeIndex];
  var style = document.createElement("link");
  style.href = `/themes/${theme[themeIndex]}/css/${theme[themeIndex]}.css`;
  style.type = "text/css";
  style.rel = "stylesheet";
  head.append(style);
}
const themeBtn = document.querySelector("#theme");

themeBtn.addEventListener("click", () => {
  if (themeBtn.innerHTML == `${theme[themeIndex]}!`) {
    var head = document.getElementsByTagName("head")[themeIndex];
    var style = document.createElement("link");
    var logo = document.querySelector("#logo");
    style.href = `/assets/themes/${theme[themeIndex]}/css/${theme[themeIndex]}.css`;
    style.type = "text/css";
    style.rel = "stylesheet";
    style.id = `${theme[themeIndex]}`;
    head.append(style);
    themeBtn.innerHTML = "Normal!";
  } else {
    document.querySelector(`#${theme[themeIndex]}`).remove();
    themeBtn.innerHTML = `${theme[themeIndex]}!`;
  }
});
