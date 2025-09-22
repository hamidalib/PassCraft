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
let password = document.getElementById("password");
const resultSubTxt = document.getElementById("resultSubTxt");

genPassBtn.addEventListener("click", function () {
  event.preventDefault(); //stops auto refresh of page
  console.log("genPassBtn clicked");

  emptyStateTxt.style.display = "none";
  generatePassBox.style.display = "flex";
  resultSubTxt.style.display = "block";
  console.log(characters.length);
});

function generatePassword() {
  console.log(characters.length);
}
