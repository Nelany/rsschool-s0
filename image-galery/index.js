const searchIcon = document.querySelector(".search-icon");
const clearIcon = document.querySelector(".clear-icon");
const input = document.querySelector(".input");
const main = document.querySelector(".main");

searchIcon.addEventListener("click", handleSearch);
clearIcon.addEventListener("click", handleClear);
input.addEventListener("keydown", handleKeyPress);

function handleSearch() {
  fetchPhotos(input.value);
  input.focus();
}

function handleClear() {
  input.value = "";
  input.focus();
}

function handleKeyPress(event) {
  if (event.keyCode == 13) {
    fetchPhotos(input.value);
    input.focus();
  }
}

async function fetchPhotos(searchString) {
  let data;
  const headers = {
    "Content-Type": "application/json",
    Authorization: "Client-ID wcsAWgugNaAnzQ_kCGjBwmjhoNIs8JpUa7ra13YRMR0",
  };

  if (searchString) {
    const response = await fetch(
      `https://api.unsplash.com/search/photos?per_page=30&query=${searchString}`,
      {
        headers: headers,
      }
    );
    const tempData = await response.json();
    data = tempData.results;
  } else {
    const response = await fetch(
      "https://api.unsplash.com/photos?per_page=30",
      {
        headers: headers,
      }
    );
    data = await response.json();
  }

  showImg(data);
}

function showImg(data) {
  if (!data || data?.length == 0) {
    main.innerHTML = `<div class="no-images">There is no images</div>`;
    return;
  }
  const links = data.map((el) => el.urls);
  const inner = links
    .map((element) => {
      return `<a href="${element.full}" target="_blank" class="img-container" style="background-image:url(${element.thumb})"></a>`;
    })
    .join("");
  main.innerHTML = inner;
}
 fetchPhotos();
