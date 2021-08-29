let changeLanguage = document.querySelector("#selectLanguage");
changeLanguage.addEventListener("change", function () {
  window.localStorage.setItem("language", changeLanguage.value);
  location.reload();
});
// let options = document.querySelectorAll("#langItem");
// const lang = localStorage.getItem("language");
// options.forEach(function (data) {
//   if (lang === "eng") {
//     data.setAttribute("selected", "selected");
//   } else if (lang === "rus") {
//     data.setAttribute("selected", "selected");
//     console.log(data);
//   } else if (lang === "uzb") {
//     data.setAttribute("selected", "selected");
//   }
// });
