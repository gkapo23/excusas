import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const quien = ["Mi perro","Mi abuela","El cartero","Mi gato"];
const accion = ["se comió","se meó","aplastó","rompió"];
const que = ["mis deberes","mi móvil","el coche","mis zapas"];
const cuando = ["antes de clase","mientras dormía","mientras comía","durante mi descanso"];

window.onload = function() {
  const random = arr => arr[Math.floor(Math.random() * arr.length)];

  const excusa = `${random(quien)} ${random(accion)} ${random(que)} ${random(cuando)}.`;

  document.querySelector("#excusa").innerText = excusa;

  console.log("Hello Rigo from the console!");
};
