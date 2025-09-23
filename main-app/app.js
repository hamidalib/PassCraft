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

genPassBtn.addEventListener("click", function () {
  event.preventDefault(); //stops auto refresh of page
  console.log("genPassBtn clicked");

  emptyStateTxt.style.display = "none";
  generatePassBox.style.display = "flex";
  resultSubTxt.style.display = "block";

  let passLen = document.getElementById("passLength").value;
  let password = document.getElementById("password");
  password.textContent = "";

  for (let i = 0; i < passLen; i++) {
    if (passLen > 19) {
      console.error("Max lenght of password can be 19.");
      password.textContent = "Error: Max length of password can be 19.";
      password.style.color = "red";
      Toastify({
        text: "This is a toast",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
        onClick: function () {}, // Callback after click
      }).showToast();

      return;
    } else {
      let randInt = Math.floor(Math.random() * 93);
      password.textContent += characters[randInt];
      password.style.color = "white";
      console.log(characters[randInt]);
    }
  }
});
