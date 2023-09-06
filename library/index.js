console.log("library part2");
console.log("Score: 50 / 50");
console.log("1). Вёрстка соответствует макету.\n Ширина экрана 768px +26");
console.log(
  "2). Ни на одном из\n разрешений до 640px\n включительно не появляется\n горизонтальная полоса прокрутки.\n Весь контент страницы\n при этом сохраняется:\n не обрезается и не\n удаляется +12"
);
console.log("3). На ширине экрана 768рх\n реализовано адаптивное меню +12");

console.log("library part1");
console.log("1. Вёрстка валидная +10");

console.log("2. Вёрстка семантическая +16");

console.log("<header>, <main>, <footer> +2.");

console.log("шесть элементов <section> (по количеству секций) +2.");

console.log("только один заголовок <h1> +2");

console.log(
  "пять заголовков <h2> \n (легко отличимы \n на верхних границах секций,\n имеют единый стиль) +2"
);

console.log("один элемент <nav> (панель навигации в хедере) +2.");

console.log(
  "два списка ul > li > a (панель навигации, ссылки на соцсети в футере) +2."
);

console.log("семь кнопок <button> +2.");

console.log("два инпута <input> +2");

console.log("3. Вёрстка соответствует макету +54");

console.log("блок <header> +8:");

console.log("секция Welcome +4.");

console.log("секция About +6:");

console.log("секция Favorites +8:");

console.log("секция CoffeShop +6.");

console.log("секция Contacts +6:");

console.log("секция LibraryCard +8:");

console.log("блок <footer> +8:");

console.log("4. Общие требования к верстке +20");

console.log("для построения сетки\n используются флексы или гриды+2.");

console.log(
  "при уменьшении масштаба\n страницы браузера вся вёрстка\n размещается по центру, а\n не сдвигается в сторону +2."
);

console.log("иконки добавлены в формате .svg. +2.");

console.log("изображения добавлены в формате\n .jpg (.jpeg) или .png +2.");

console.log("есть favicon +2.");

console.log("плавная прокрутка по якорям +2.");

console.log(
  "в футере название ссылки\n Username заменено и ведет\n на GitHub студента +2."
);

console.log(
  "в футере ссылка The Rolling\n Scopes School ведет на страницу\n курса https://rs.school/js-stage0/ +2."
);

console.log("интерактивность элементов\n согласно макету. +2.");

console.log(
  "обязательное требование к интерактивности:\n плавное изменение внешнего вида\n элемента при наведении и клике\n не влияет на соседние элементы +2."
);

(function () {
  // ________________________________________________________________
  // БУРГЕР

  const burger = document.querySelector(".header__buger");
  const xPopup = document.querySelector(".header__popup-x");
  const popupItem = document.querySelector(".popup__item");
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
    burger.classList.add("hidden");
  }

  //при клике на любое место боди вызываем ф-ию closeOnClick
  body.addEventListener("click", closeOnClick);

  // выполняемая функция
  function closeOnClick(event) {
    // исключаем иконку burger
    if (event.target != burger) {
      //переключаем стили элементов
      popup.classList.remove("open");
      xPopup.classList.add("hidden");
      burger.classList.remove("hidden");
    }
  }

  // ________________________________________________________________
  // ОКНО profile

  const profile = document.querySelector(".profile");
  const defaultAvatar = document.querySelector(".default-avatar");
  const personalAvatar = document.querySelector(".personal-avatar");

  // При клике на иконку профиля вызываем ф-ию headerIconHandler
  defaultAvatar.addEventListener("click", headerIconHandler);

  // выполняемая функция
  function headerIconHandler(e) {
    e.preventDefault();
    //переключаем стили элементов
    profile.classList.toggle("open");
  }

  //при клике на любое место боди вызываем ф-ию closeProfileLogIn
  body.addEventListener("click", closeProfile);

  // выполняемая функция
  function closeProfile(event) {
    // исключаем иконку профиля
    if (event.target != defaultAvatar) {
      //переключаем стили элементов
      profile.classList.remove("open");
    }
  }

  // ________________________________________________________________
  // МОДАЛЬНЫЕ ОКНА

  const modalLogin = document.querySelector(".modal-log-in");
  const modalRegister = document.querySelector(".modal-register");
  const registrationForms = document.querySelectorAll(".modal__form");
  const modalProfile = document.querySelector(".modal-profile");
  const modalBuycard = document.querySelector(".modal-buycard");

  //при клике на любое место боди вызываем ф-ию openModalWindow
  body.addEventListener("click", openModalWindow);

  // ________________________________________________________________
  // кнопка покупки книг(вызывающая окно покупки карты, если таковой нет)

  function buyHandler() {
    const authorizedEmail = localStorage.getItem("authorized");

    if (!authorizedEmail) {
      //переключаем стили элементов
      modalLogin.classList.remove("disabled");
      return;
    }

    const authorizedUserData = localStorage.getItem(authorizedEmail); // получаем строку с данными пользователя
    const userObject = JSON.parse(authorizedUserData); // и делаем из него объект

    const isCard = userObject.isCard; // получаем из объекта с данными пользователя нужныe

    if (!isCard) {
      //переключаем стили элементов
      modalBuycard.classList.remove("disabled");

      // модальное окно покупки карты
      const buyCardForm = document.querySelector(".modal-buycard__form");

      buyCardForm.addEventListener(
        "submit",
        function (event) {
          event.preventDefault(); // Предотвращаем стандартное действие отправки формы

          userObject.isCard = true; // получаем данные о покупке карты, меняем на true
          const updatedUserData = JSON.stringify(userObject); // создаем новую строку для объекта
          const savedEmail = userObject.email;
          const savedCardNumber = userObject.cardNumber;

          // Сохраняем эту строку обратно в Local Storage в 2 объекта, заведенных на каждого юзера
          localStorage.setItem(savedEmail, updatedUserData); // по Email
          localStorage.setItem(savedCardNumber, updatedUserData); // и по CardNumber

          //закрываем и очищаем форму покупки карты
          modalBuycard.classList.add("disabled");
          buyCardForm.reset(); // очищаем поля формы
        },
        { once: true }
      );

      return;
    }
  }


  // ________________________________________________________________
  // ModalWindows close/open

  // при клике на любое место боди вызываем ф-ию openModalWindow
  function openModalWindow(event) {
    //определяем, совпадает ли класс элемента, на который кликнули, с заданным
    if (event.target.classList.contains("open-modal-login")) {
      //переключаем стили элементов
      modalLogin.classList.remove("disabled");
      //определяем, совпадает ли класс элемента, на который кликнули, с заданным
    } else if (event.target.classList.contains("open-modal-register")) {
      //переключаем стили элементов
      modalRegister.classList.remove("disabled");
      //определяем, совпадает ли класс элемента, на который кликнули, с заданным
    } else if (event.target.classList.contains("open-modal-profile")) {
      //переключаем стили элементов
      modalProfile.classList.remove("disabled");
      //определяем, совпадает ли класс элемента, на который кликнули, с заданным
    } else if (event.target.classList.contains("open-modal-buycard")) {
      buyHandler();
    }
  }

  //при клике на любое место боди вызываем ф-ию closeModalWindow
  body.addEventListener("click", closeModalWindow);

  // выполняемая функция
  function closeModalWindow(event) {
    //определяем, совпадает ли класс элемента, на который кликнули, с заданным
    if (event.target.classList.contains("modal-login-closer")) {
      //переключаем стили элементов
      modalLogin.classList.add("disabled");
      registrationForms.forEach((element) => {
        element.reset();
      }); // очищаем формы
      //определяем, совпадает ли класс элемента, на который кликнули, с заданным
    } else if (event.target.classList.contains("modal-register-closer")) {
      //переключаем стили элементов
      modalRegister.classList.add("disabled");
      registrationForms.forEach((element) => {
        element.reset();
      }); // очищаем формы
      //определяем, совпадает ли класс элемента, на который кликнули, с заданным
    } else if (event.target.classList.contains("modal-profile-closer")) {
      //переключаем стили элементов
      modalProfile.classList.add("disabled");
      registrationForms.forEach((element) => {
        element.reset();
      }); // очищаем формы
      //определяем, совпадает ли класс элемента, на который кликнули, с заданным
    } else if (event.target.classList.contains("modal-buycard-closer")) {
      //переключаем стили элементов
      modalBuycard.classList.add("disabled");
      registrationForms.forEach((element) => {
        element.reset();
      }); // очищаем формы
    }
  }

  // ________________________________________________________________
  // СЛАЙДЕР about

  const slides = document.querySelectorAll(".about__img");
  const prevButton = document.querySelector(".about__arrow--left");
  const nextButton = document.querySelector(".about__arrow--right");
  const pages = document.querySelectorAll(".about__button");

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
    const isTwoImages = window.innerWidth < 1430 && window.innerWidth > 1024;
    if (currentIndex < slides.length - (isTwoImages ? 2 : 1)) {
      currentIndex++;
    }
    showSlide(currentIndex);
    activatePage(currentIndex);
  }

  function activatePage(index) {
    pages.forEach((page, i) => {
      if (i === index) {
        page.checked = true;
      } else {
        page.checked = false;
      }
    });
    activateArrows();
  }

  pages.forEach((page, index) => {
    page.addEventListener("click", () => {
      currentIndex = index;
      showSlide(currentIndex);
      activatePage(currentIndex);
    });
  });

  prevButton.addEventListener("click", () => {
    prevSlide();
  });

  nextButton.addEventListener("click", () => {
    nextSlide();
  });

  function activateArrows() {
    if (currentIndex === 0) {
      prevButton.classList.add("inactive");
      nextButton.classList.remove("inactive");
      return;
    }
    if (currentIndex === 4) {
      nextButton.classList.add("inactive");
      prevButton.classList.remove("inactive");
      return;
    }
    nextButton.classList.remove("inactive");
    prevButton.classList.remove("inactive");
  }

  showSlide(currentIndex);
  activatePage(currentIndex);

  // ________________________________________________________________
  // СЛАЙДЕР favorites

  const radios = document.querySelectorAll(".favorites__input-season");
  const elements = document.querySelectorAll(".favorites__item-group");

  radios.forEach((radio) => {
    radio.addEventListener("click", function (event) {
      // Вернули функцию обратно
      if (event.target.checked) {
        const selectorId = event.target.id; // Получаем id радио-кнопки
        toggleVisibility(selectorId);
      }
    });
  });

  function toggleVisibility(selectorId) {
    elements.forEach((element) => {
      if (element.classList.contains(selectorId)) {
        element.classList.remove("hidden-slide");
      } else {
        element.classList.add("hidden-slide");
      }
    });
  }

  // ________________________________________________________________
  // РЕГИСТРАЦИЯ и localStorage

  // ОКНО РЕГИСТРАЦИИ
  const profileMyprofile = document.querySelector(".profile-myprofile");

  // Слушаем событие отправки формы
  const registrationForm = document.getElementById("register-form");

  registrationForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Предотвращаем стандартное действие отправки формы

    // Сохраняем данные в localStorage
    // localStorage.setItem("savedFirstname", firstname.value);
    // localStorage.setItem("savedLastname", lastname.value);
    // localStorage.setItem("savedEmail", email.value);
    // localStorage.setItem("savedPassword", password.value);
    // modalRegister.classList.add("disabled");
    // ifRegistered();

    // Получаем введенные пользователем данные формы
    const userFirstname = document.querySelector(".firstname").value;
    const userLastname = document.querySelector(".lastname").value;
    const userEmail = document.querySelector(".email").value;
    const userPassword = document.querySelector(".password").value;
    // Получаем случайный номер, сгенерированный с помощью соответствующей функции
    const usercardNumber = generateCardNumber();

    // Создаем объект с данными пользователя
    const userData = {
      firstname: userFirstname, // Сохраняем данные как пары ключ-значение
      lastname: userLastname,
      email: userEmail,
      password: userPassword,
      cardNumber: usercardNumber,
      visits: 1,
      isCard: false,
      books: [],
    };

    // Сохраняем объект userData в localStorage с ключом, равным email
    localStorage.setItem(userEmail, JSON.stringify(userData));
    // Сохраняем в localStorage переменную со значением, равным email авторизованного в данный момент пользователя
    localStorage.setItem("authorized", userData.email);
    // Сохраняем объект userData в localStorage с ключом, равным cardNumber
    localStorage.setItem(usercardNumber, JSON.stringify(userData));

    registrationForm.reset(); // очищаем форму после сохранения
    modalRegister.classList.add("disabled"); // закрываем окно регистрации

    ifAuthorised(); // вызываем функцию, меняющую вид авторизованной страници
  });

  // ________________________________________________________________
  // Генерация случайного 16-ричного номера карты

  function generateCardNumber() {
    // Генерируем случайное девятизначное число
    const randomNumber = Math.floor(Math.random() * 900000000 + 100000000);

    // Преобразуем это число в 16-ричную строку
    const hexCardNumber = randomNumber.toString(16);

    // Возвращаем полученное значение
    return hexCardNumber;
  }

  // ________________________________________________________________
  // ПРОВЕРКА АВТОРИЗАЦИИ - меняем вид авторизованной страници

  // Меняем аватар defaultAvatar на personalAvatar итд
  // ________________________________________________________________
  //

  const elementsYourCard = document.querySelectorAll(".cards__your-card");
  const elementsFindCard = document.querySelectorAll(".cards__find-card");
  let userCardsName = document.querySelector(".cards__your-name");
  let cardNumber = document.querySelectorAll(".card-number");
  const findCardButton = document.querySelector(".cards__find-card-button");
  const cardForm = document.querySelector(".cards__form");
  const yourCardData = document.querySelector(".cards__your-card-data");

  ifAuthorised();

  function ifAuthorised() {
    // запрашиваем из localStorage переменную с Email авторизованного в данный момент пользователя
    const authorizedEmail = localStorage.getItem("authorized");
    if (!authorizedEmail) {
      // Если ее не существует - дефолтная страница, остановка функции
      defaultAvatar.classList.remove("disabled");
      personalAvatar.classList.add("disabled");

      // дефолтный вид секции cards
      elementsYourCard.forEach((element) => {
        element.classList.add("disabled");
      });
      elementsFindCard.forEach((element) => {
        element.classList.remove("disabled");
      });

      return; // И останавливаем дальнейшее выполнение функции
    }

    const authorizedUserData = localStorage.getItem(authorizedEmail); // получаем строку с данными пользователя
    const userObject = JSON.parse(authorizedUserData); // и делаем из него объект

    const savedFirstname = userObject.firstname; // получаем из объекта с данными пользователя нужные
    const savedLastname = userObject.lastname;
    const savedCardNumber = userObject.cardNumber;
    const modalProfileAvatar = document.querySelector(".modal-profile__avatar");
    const modalProfileName = document.querySelector(".modal-profile__name");

    // используем первые буквы имени и фамилии для аватарки итд
    const avatarText = `${savedFirstname.charAt(0)}${savedLastname.charAt(0)}`;
    const fullNameText = `${savedFirstname} ${savedLastname}`;

    // меняем аватар
    defaultAvatar.classList.add("disabled");
    personalAvatar.classList.remove("disabled");

    // Устанавливаем текст аватаров, имя, атрибут title
    personalAvatar.textContent = avatarText;
    personalAvatar.title = fullNameText;
    modalProfileAvatar.textContent = avatarText;
    modalProfileName.textContent = fullNameText;

    // записывам на странице нужный номер карты в соответствующих местах
    cardNumber.forEach((element) => {
      element.textContent = savedCardNumber;
      element.value = savedCardNumber;
    });

    // меняем вид секции cards
    elementsYourCard.forEach((element) => {
      element.classList.remove("disabled");
    });
    elementsFindCard.forEach((element) => {
      element.classList.add("disabled");
    });
    userCardsName.value = fullNameText;
    // Обновляем счетчики на странице
    updateVisits(userObject);
    updateBooks(userObject);
    // показываем данные о карте
    showCard();
  }

  // ________________________________________________________________
  // Функци, обновляющие счетчики визитов и книг

  function updateVisits(userObject) {
    // Обновляем счетчик визитов на странице
    let visitsNumbers = document.querySelectorAll(".visits-number");
    visitsNumbers.forEach((visitsNumber) => {
      visitsNumber.textContent = userObject.visits;
    });
  }

  function updateBooks(userObject) {
    // Обновляем счетчик книг на странице
    let booksNumbers = document.querySelectorAll(".books-number");
    booksNumbers.forEach((booksNumber) => {
      booksNumber.textContent = userObject.books.length;
    });
  }

  // ________________________________________________________________
  // Функция, вызывающая showCard и отменяющая ее действия через 10 сек
  function toggleCardData(event) {
    event.preventDefault(); // Предотвращаем стандартное действие отправки формы
    showCard();
    // прячем информацию, возвращаем кнопку через 10сек
    setTimeout(() => {
      hideCardData();
    }, 10000);
  }

  // ________________________________________________________________
  // разрешаем проверку карты на 10 сек при сабмите формы
  cardForm.addEventListener("submit", toggleCardData);

  // ________________________________________________________________
  // Функция, скрывающая данные о карте
  function hideCardData() {
    findCardButton.classList.remove("disabled");
    yourCardData.classList.add("disabled");
  }

  // ________________________________________________________________
  //   showCard - доступ к информации о карте, если такая зарегистрирована

  function showCard() {
    const nameField = document.querySelector(".cards__your-name");
    const cardNumberField = document.querySelector(".cards__number");
    // получаем из localStorage обЪект по номеру карты
    const authorizedUserData = localStorage.getItem(cardNumberField.value);
    if (authorizedUserData) {
      // Если он существует
      const userObject = JSON.parse(authorizedUserData); // делаем из него объект
      const savedFirstname = userObject.firstname; // и получаем из объекта с данными пользователя нужные
      const savedLastname = userObject.lastname;
      const savedcardNumber = userObject.cardNumber;
      const savedFullname = `${savedFirstname} ${savedLastname}`; // делаем полное имя из localStorage

      // и сравниваем введенные и сохраненные данные
      if (
        nameField.value === savedFullname &&
        cardNumberField.value === savedcardNumber
      ) {
        // прячем кнопку и показываем данные о карте
        findCardButton.classList.add("disabled");
        yourCardData.classList.remove("disabled");
      }
    }
  }

  // ________________________________________________________________
  // ОКНО profile-myprofile

  // При клике на иконку профиля вызываем ф-ию personalAvatarHandler
  personalAvatar.addEventListener("click", personalAvatarHandler);

  // выполняемая функция
  function personalAvatarHandler(e) {
    console.log("hi");
    e.preventDefault();
    //переключаем стили элементов
    profileMyprofile.classList.toggle("open");
  }

  //при клике на любое место боди вызываем ф-ию closeProfileMyprofile
  body.addEventListener("click", closeProfileMyprofile);

  // выполняемая функция
  function closeProfileMyprofile(event) {
    // исключаем иконку профиля
    if (event.target != personalAvatar) {
      //переключаем стили элементов
      profileMyprofile.classList.remove("open");
    }
  }

  // ________________________________________________________________
  // LOG OUT

  const loginForm = document.querySelector(".login-form");
  const logOutButton = document.querySelector(".profile-log-in__item-logout");

  logOutButton.addEventListener("click", logOut);

  function logOut() {
    localStorage.removeItem("authorized"); // удаляем из localStorage данные о залогиненом в данный момент пользователе
    ifAuthorised(); // вызываем функцию, меняющую вид страници на соответствующую
    loginForm.reset(); // очищаем login-форму на странице
    cardForm.reset(); // очищаем форму карты на странице
    hideCardData(); // скрываем данные карты, возвращаем кнопку
  }

  // ________________________________________________________________
  // LOG IN

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const loginField = document.querySelector(".login-form__login");
    const passwordField = document.querySelector(".login-form__password");
    const authorizedUserData = localStorage.getItem(loginField.value); // получаем строку с данными пользователя

    // проверяем, существует ли она, чтобы не поломался JSON.parse
    if (authorizedUserData) {
      const userObject = JSON.parse(authorizedUserData); // и делаем из неe объект
      const savedEmail = userObject.email; // получаем из объекта с данными пользователя нужные
      const savedPassword = userObject.password;
      const savedCardNumber = userObject.cardNumber;

      function ifRegistered() {
        if (
          loginField.value === savedEmail ||
          (loginField.value === savedCardNumber &&
            passwordField.value === savedPassword)
        ) {
          ++userObject.visits; // получаем данные о сохраненных визитах, увеличиваем на 1
          const updatedUserData = JSON.stringify(userObject); // создаем новую строку для объекта

          // Сохраняем эту строку обратно в Local Storage в 2 объекта, заведенных на каждого юзера
          localStorage.setItem(savedEmail, updatedUserData); // по Email
          localStorage.setItem(savedCardNumber, updatedUserData); // и по CardNumber

          // Сохраняем в localStorage переменную со значением, равным email авторизованного только что пользователя
          localStorage.setItem("authorized", savedEmail);
          ifAuthorised(); // вызываем функцию, меняющую вид авторизованной страници
          // Обновляем счетчики на странице
          updateVisits(userObject);
          updateBooks(userObject);
          showCard(); // вызываем функцию, показывающую данные карты
        }
      }
      ifRegistered();

      modalLogin.classList.add("disabled"); // закрываем окно
      registrationForms.forEach((element) => {
        element.reset();
      }); // очищаем формы
    }
  });

  // ________________________________________________________________
  //
})();
// ВОТ ТУТ КОД НЕ ПИСАТЬ!!!>:)
