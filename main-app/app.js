const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",

  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",

  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",

  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "_",
  "=",
  "+",
  "[",
  "]",
  "{",
  "}",
  "|",
  ";",
  ":",
  "'",
  '"',
  ",",
  ".",
  "<",
  ">",
  "?",
  "/",
  "`",
  "~",
];
const genPassBtn = document.getElementById("genPassBtn");
const emptyStateTxt = document.getElementById("emptyStateTxt");
const generatePassBox = document.getElementById("generatePassBox");
const resultSubTxt = document.getElementById("resultSubTxt");
const savePassBtn = document.getElementById("saveBtn");
let password = document.getElementById("password");

// Password generation functionality
genPassBtn.addEventListener("click", function () {
  event.preventDefault(); //stops auto refresh of page
  console.log("genPassBtn clicked");

  emptyStateTxt.style.display = "none";
  generatePassBox.style.display = "flex";
  resultSubTxt.style.display = "block";
  let passLen = document.getElementById("passLength").value;

  password.textContent = "";

  if (passLen > 19) {
    console.error("Max lenght of password can be 19.");
    password.textContent = "Error: Max length of password can be 19.";
    password.style.color = "red";
    Toastify({
      text: "Error: Max length of password can be 19.",
      className: "info",
      gravity: "bottom",
      close: true,
      style: {
        background: "rgba(143, 54, 54, 0.75)",
        border: "1px solid rgba(255,255,255,0.1)",
      },
    }).showToast();
  } else {
    for (let i = 0; i < passLen; i++) {
      let randInt = Math.floor(Math.random() * 93);
      password.textContent += characters[randInt];
      password.style.color = "white";
      console.log(characters[randInt]);
    }
    Toastify({
      text: "Password generated",
      className: "info",
      gravity: "bottom",
      close: true,
      style: {
        background: "rgba(72, 53, 88, 0.75)",
        border: "1px solid rgba(255,255,255,0.1)",
      },
    }).showToast();
  }
});

// Copy password functionality
generatePassBox.addEventListener("click", function () {
  console.log("Copying password");
  Toastify({
    text: "Password Copied!",
    className: "info",
    gravity: "bottom",
    close: true,
    style: {
      background: "rgba(72, 53, 88, 0.75)",
      border: "1px solid rgba(255,255,255,0.1)",
    },
  }).showToast();

  navigator.clipboard.writeText(password.textContent);
});

// Save password functionality
savePassBtn.addEventListener("click", function () {
  console.log("Save btn clicked");
  Toastify({
    text: "Password Saved!",
    className: "info",
    gravity: "bottom",
    close: true,
    style: {
      background: "rgba(72, 53, 88, 0.75)",
      border: "1px solid rgba(255,255,255,0.1)",
    },
  }).showToast();
});
