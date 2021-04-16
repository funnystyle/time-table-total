const input = document.querySelector("#input");
const result = document.querySelector("#result");
const error = document.querySelector("#error");
const reset = document.querySelector("#reset");
const regex = /([0-9]+:)+[0-9]+/gim;

function clear() {
  [error, result].forEach((dom) => {
    dom.classList.add("off");
    dom.innerText = "";
  });
}

function handleResetClick() {
  clear();
  input.focus();
}

function printResult(text) {
  result.classList.remove("off");
  error.classList.add("off");
  result.innerText = text;
}

function printError(text) {
  result.classList.add("off");
  error.classList.remove("off");
  error.innerText = text;
}

function lpad0(number) {
  return `${number}`.length === 1 ? `0${number}` : `${number}`;
}

function int(str) {
  return parseInt(str, 10);
}

function sumSeconds(time) {
  const splitted = time.split(":");
  return splitted.reduce((prev, curr) => int(prev) * 60 + int(curr), 0);
}

function sumTotalSeconds(times) {
  return times.reduce((prev, curr) => prev + sumSeconds(curr), 0);
}

function handleInputChange(e) {
  e.preventDefault();
  const text = e.target.value;

  if (text === "") {
    clear();
    return;
  }

  var found = text.match(regex);

  if (found === null) {
    printError("No Time Data");
    return;
  }

  const totalSeconds = sumTotalSeconds(found);

  const MM = lpad0(Math.floor(totalSeconds / 60));
  const SS = lpad0(totalSeconds % 60);

  printResult(`Total ${MM}:${SS}`);
}

function init() {
  input.addEventListener("input", handleInputChange);
  reset.addEventListener("click", handleResetClick);
}

init();
