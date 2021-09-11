"use strict";
import "core-js/stable";
import "regenerator-runtime/runtime";
import { DisplayController, Player } from "./myModule.js";
import "./css/reset.css";
import "./css/style.css";
import Icon from './media/washington.ico';


//add FavIcon
DisplayController.addFavIcon(Icon);





DisplayController.saySomething("HelloWorld");
const alan = Player("Alan");
console.log(alan.getPlayer());

function component() {
  const element = document.createElement("div");
  element.classList.add("center-items");
  
  element.innerHTML = "Hello Webpack";

  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.getElementsByTagName("main")[0].appendChild(component());




