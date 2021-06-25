console.log("hello world");

function handleSubmit(evt) {
  evt.preventDefault();

  alert("form submit");
}

//let form = document.querySelector("form#contact");
let form = document.querySelector("#home-image");

form.addEventListener("submit", handleSubmit);

form.addEventListener("mouseover", () => {
  alert("give the user a compliment");
});
