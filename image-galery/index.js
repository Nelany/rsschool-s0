const searchIcon = document.querySelector(".search-icon");
const input = document.querySelector(".input");

searchIcon.addEventListener ("click", handleClick)

function handleClick(event) {
let value = input.value;

console.log(value);
}



