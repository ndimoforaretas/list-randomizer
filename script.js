// select elements
const form = document.getElementById("form");
const inputName = document.getElementById("name");
const list = document.getElementById("list");
const addBtn = document.getElementById("add");
const randomizeBtn = document.getElementById("randomize");
const clearBtn = document.getElementById("clear");
const removeBtn = document.getElementById("remove");
const sortBtn = document.getElementById("sort");
const reverseBtn = document.getElementById("reverse");
const copyBtn = document.getElementById("copy");

// initialize names array
let names = [];

// create functions
// 1. a function to add a name to the names array
function addName() {
  if (!inputName.value) return;
  const name = inputName.value.trim();

  if (name.length === 0 || names.includes(name)) return;
  names.push(name);
  inputName.value = "";
  updateNames();
}

// 2. a function to update the names list
function updateNames() {
  list.innerHTML = names
    .map((name, index) => `<li class='fade-in'>${index + 1}. ${name}</li>`)
    .join("");

  // After rendering the new names, remove the animation class so it only plays when a new name is added
  setTimeout(() => {
    const listItems = document.querySelectorAll(".fade-in");
    listItems.forEach((item) => item.classList.remove("fade-in"));
  }, 1000);
}

// 3. a function to copy the names to the clipboard
function copyNames() {
  const namesString = names.join("\n");
  navigator.clipboard.writeText(namesString);
  alert("Names copied to clipboard!");
}

// add event listeners
// 1. add a name when the form is submitted
form.addEventListener("submit", (event) => {
  event.preventDefault();
  addName();
});

// 2. add a name when the add button is clicked
addBtn.addEventListener("click", addName);

// 3. randomize the names array when the randomize button is clicked
randomizeBtn.addEventListener("click", () => {
  names.sort(() => Math.random() - 0.5);
  updateNames();
});

// 4. clear the names array when the clear button is clicked
clearBtn.addEventListener("click", () => {
  names = [];
  updateNames();
});

// 5. remove the last name from the names array when the remove button is clicked
removeBtn.addEventListener("click", () => {
  names.pop();
  updateNames();
});

// 6. sort the names array when the sort button is clicked
sortBtn.addEventListener("click", () => {
  names.sort();
  updateNames();
});

// 7. reverse the names array when the reverse button is clicked
reverseBtn.addEventListener("click", () => {
  names.reverse();
  updateNames();
});

// 8. copy the names to the clipboard when the copy button is clicked
copyBtn.addEventListener("click", copyNames);
