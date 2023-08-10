console.log("librery part2")
console.log("Score: 50 / 50")
console.log("1). Вёрстка соответствует макету.\n Ширина экрана 768px +26")
console.log("2). Ни на одном из\n разрешений до 640px\n включительно не появляется\n горизонтальная полоса прокрутки.\n Весь контент страницы\n при этом сохраняется:\n не обрезается и не\n удаляется +12")
console.log("3). На ширине экрана 768рх\n реализовано адаптивное меню +12")


console.log("librery part1")
console.log(
"1. Вёрстка валидная +10")

console.log(
  "2. Вёрстка семантическая +16")

  console.log(
  "<header>, <main>, <footer> +2.")

  console.log("шесть элементов <section> (по количеству секций) +2.")

  console.log(
  "только один заголовок <h1> +2")

  console.log(
  "пять заголовков <h2> \n (легко отличимы \n на верхних границах секций,\n имеют единый стиль) +2")

  console.log("один элемент <nav> (панель навигации в хедере) +2.")

  console.log("два списка ul > li > a (панель навигации, ссылки на соцсети в футере) +2.")

  console.log("семь кнопок <button> +2.")

  console.log("два инпута <input> +2")

  console.log("3. Вёрстка соответствует макету +54")

  console.log("блок <header> +8:")

  console.log("секция Welcome +4.")

  console.log("секция About +6:")

  console.log("секция Favorites +8:")

  console.log("секция CoffeShop +6.")

  console.log("секция Contacts +6:")

  console.log("секция LibraryCard +8:")

  console.log("блок <footer> +8:")

  console.log("4. Общие требования к верстке +20")

  console.log("для построения сетки\n используются флексы или гриды+2.")

  console.log("при уменьшении масштаба\n страницы браузера вся вёрстка\n размещается по центру, а\n не сдвигается в сторону +2.")

  console.log("иконки добавлены в формате .svg. +2.")

  console.log("изображения добавлены в формате\n .jpg (.jpeg) или .png +2.")

  console.log("есть favicon +2.")

  console.log("плавная прокрутка по якорям +2.")

  console.log("в футере название ссылки\n Username заменено и ведет\n на GitHub студента +2.")

  console.log("в футере ссылка The Rolling\n Scopes School ведет на страницу\n курса https://rs.school/js-stage0/ +2.")

  console.log("интерактивность элементов\n согласно макету. +2.")

  console.log("обязательное требование к интерактивности:\n плавное изменение внешнего вида\n элемента при наведении и клике\n не влияет на соседние элементы +2.")


const burger = document.querySelector(".header__buger");
const xPopup = document.querySelector(".header__popup-x");
const popupItem = document.querySelector(".popup__item")
const popup = document.querySelector(".popup");
const body = document.body;



// При клике на иконку burger вызываем ф-ию burgerHandler
burger.addEventListener("click", burgerHandler);

// выполняемая функция
function burgerHandler(e) {
    e.preventDefault();
    //переключаем стили элементов
    popup.classList.add("open");
    xPopup.classList.remove("hidden");
    burger.classList.add("hidden")
}

//при клике на любое место боди вызываем ф-ию closeOnClick
body.addEventListener("click",closeOnClick);

// выполняемая функция
function closeOnClick(event) {
  // исключаем иконку burger
  if(event.target!=burger){
        //переключаем стили элементов
        popup.classList.remove("open");
        xPopup.classList.add("hidden");
        burger.classList.remove("hidden")
  }
}


