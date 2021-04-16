const input = document.querySelector("#input");

function handleInputChange(e) {
  e.preventDefault();
  console.log(e);
}

function init() {
  console.log(input);
  input.addEventListener("input", handleInputChange);
}

init();
