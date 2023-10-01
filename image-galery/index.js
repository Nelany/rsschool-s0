const searchIcon = document.querySelector(".search-icon");
const input = document.querySelector(".input");
const main = document.querySelector(".main");

searchIcon.addEventListener("click", handleSearch);

function handleSearch() {
  fetchPhotos(input.value);
  input.focus();
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
  }

  showImg(data);
}

function showImg(data) {
  const links = data.map((el) => el.urls);
  const inner = links
    .map((element) => {
      return `<a href="${element.full}" target="_blank" class="img-container" style="background-image:url(${element.thumb})"></a>`;
    })
    .join("");
  main.innerHTML = inner;
}
