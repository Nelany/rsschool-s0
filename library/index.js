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

// ________________________________________________________________


const headerIcon = document.querySelector(".header__icon");
const profileLogInItem = document.querySelector(".profile-log-in__item")
const profileLogIn = document.querySelector(".profile-log-in");



// При клике на иконку профиля вызываем ф-ию headerIconHandler
headerIcon.addEventListener("click", headerIconHandler);

// выполняемая функция
function headerIconHandler(e) {
    e.preventDefault();
    //переключаем стили элементов
    profileLogIn.classList.add("open");
}

//при клике на любое место боди вызываем ф-ию closeProfileLogIn
body.addEventListener("click",closeProfileLogIn);

// выполняемая функция
function closeProfileLogIn(event) {
  // исключаем иконку профиля
  if(event.target!=headerIcon){
        //переключаем стили элементов
        profileLogIn.classList.remove("open");
  }
}

// ________________________________________________________________

const modalLogin = document.querySelector(".modal-log-in");
const modalRegister = document.querySelector(".modal-register");
const modalProfile = document.querySelector(".modal-profile");
const modalBuycard = document.querySelector(".modal-buycard");


//при клике на любое место боди вызываем ф-ию openModalWindow
body.addEventListener("click",openModalWindow);

// выполняемая функция
function openModalWindow(event) {
  //определяем, совпадает ли класс элемента, на который кликнули, с заданным
  if(event.target.classList.contains("open-modal-login")){
        //переключаем стили элементов
        modalLogin.classList.remove("disabled");
  //определяем, совпадает ли класс элемента, на который кликнули, с заданным
  } else if(event.target.classList.contains("open-modal-register")){
        //переключаем стили элементов
        modalRegister.classList.remove("disabled");
  //определяем, совпадает ли класс элемента, на который кликнули, с заданным
} else if(event.target.classList.contains("open-modal-profile")){
  //переключаем стили элементов
  modalProfile.classList.remove("disabled");
  //определяем, совпадает ли класс элемента, на который кликнули, с заданным
} else if(event.target.classList.contains("open-modal-buycard")){
  //переключаем стили элементов
  modalBuycard.classList.remove("disabled");
}
}

//при клике на любое место боди вызываем ф-ию closeModalWindow
body.addEventListener("click",closeModalWindow);

// выполняемая функция
function closeModalWindow(event) {
  //определяем, совпадает ли класс элемента, на который кликнули, с заданным
  if(event.target.classList.contains("modal-login-closer")){
        //переключаем стили элементов
        modalLogin.classList.add("disabled");
  //определяем, совпадает ли класс элемента, на который кликнули, с заданным
  } else if(event.target.classList.contains("modal-register-closer")){
        //переключаем стили элементов
        modalRegister.classList.add("disabled");
  //определяем, совпадает ли класс элемента, на который кликнули, с заданным
} else if(event.target.classList.contains("modal-profile-closer")){
  //переключаем стили элементов
  modalProfile.classList.add("disabled");
//определяем, совпадает ли класс элемента, на который кликнули, с заданным
} else if(event.target.classList.contains("modal-buycard-closer")){
  //переключаем стили элементов
  modalBuycard.classList.add("disabled");
}
}

// ________________________________________________________________

  const slider = document.querySelector('.about__images');
  const slides = document.querySelectorAll('.about__img');
  const prevButton = document.querySelector('.about__arrow--left');
  const nextButton = document.querySelector('.about__arrow--right');
  const pages = document.querySelectorAll('.about__button');


  let currentIndex = 0;



  function showSlide(index) {
    slides.forEach((slide) => {
      slide.style.transform = `translateX(${index * -475}px)`;
    });
  }

  function prevSlide() {
    if (currentIndex > 0) {
      currentIndex--;
    }

    showSlide(currentIndex);
    activatePage(currentIndex);
  }

  function nextSlide() {
    const isTwoImages=(window.innerWidth< 1430 &&  window.innerWidth> 1024 );
    if (currentIndex < slides.length - (isTwoImages?2:1)) {
      currentIndex++;
    }

    showSlide(currentIndex);
    activatePage(currentIndex);
  }

  function activatePage(index) {
    pages.forEach((page, i) => {
      if (i === index) {
        page.checked=true;
      } else {
        page.checked=false;
      }
    });
  }

  pages.forEach((page, index) => {
    page.addEventListener('click',
    () => {
      currentIndex = index;
      showSlide(currentIndex);
      activatePage(currentIndex);
    }
    );
  });

  prevButton.addEventListener('click', () => {
    prevSlide();
  });

  nextButton.addEventListener('click', () => {
    nextSlide();
  });

  showSlide(currentIndex);
  activatePage(currentIndex);


  // ________________________________________________________________


  const radios = document.querySelectorAll('.favorites__input-season');
  const elements = document.querySelectorAll('.favorites__item');

  radios.forEach((radio) => {
    radio.addEventListener('click', function(event) { // Вернули функцию обратно
      if (event.target.checked) {
        const selectorId = event.target.id; // Получаем id радио-кнопки
        toggleVisibility(selectorId)
      }
    }
    );
  });

  function toggleVisibility(selectorId){
    elements.forEach((element) => {

      if (element.classList.contains(selectorId)) {
          element.classList.remove('disabled'); // Удаляем класс 'disabled' у элементa
          element.classList.add('hidden-slide');

          setTimeout(() => {
            element.classList.remove('hidden-slide');
          }, 600);

      } else {
          element.classList.add('hidden-slide');

          setTimeout(() => {
            element.classList.add('disabled'); //  Добавляем класс 'disabled' к остальныь элементам
          }, 500);
      }
  });
  }