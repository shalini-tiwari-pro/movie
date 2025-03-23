async function searchMovie() {
  let movie = document.getElementById("movie").value;
  try {
    let r = await fetch(`http://www.omdbapi.com/?apikey=ba3dcd74&s=${movie}`);
    let d = await r.json();
    console.log("d", d);
    let data = d.Search;
    console.log("d", data);
    appendFun(data);
  } catch (error) {
    console.log("error", error);
  }
}
let id;
function debounce(fun, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    fun();
  }, 1000);
}
function appendFun(data) {
  let loading = document.getElementById("loading");
  loading.style.display = "none";
  let main_div = document.getElementById("main_div");
  main_div.innerHTML = "";

  data.forEach(function (el) {
    let div = document.createElement("div");

    let img = document.createElement("img");
    img.src = el.Poster;
    let para = document.createElement("p");
    para.innerHTML = el.Title;
    let para_type = document.createElement("p");
    para_type.innerHTML = el.Type;
    let para_year = document.createElement("p");
    para_year.innerHTML = el.Year;
    div.append(img, para, para_type, para_year);
    main_div.append(div);
  });
}

function slide_show() {
  let carousel_div = document.getElementById("carousel");
  let image = [
    "https://cdn.moviefone.com/admin-uploads/posters/moana2-movie-poster_1727368861.jpg?d=360x540&q=80",
    "https://assetscdn1.paytm.com/images/cinema/01Chavaa4--Gallery-f91e25a0-f7f7-11ef-b63b-eb1f8a63c930.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIA4tdXTkshWvjxXLVPFxgMRNX2Wrnp7KxxQ&s",
    "https://i.ytimg.com/vi/kmrULc5t0jE/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBvxI9d9xk4XSqz8siwp2hvDe-pDw",
  ];
  let imgg = document.createElement("img");
  imgg.style.width = "100%";

  let i = 0;

  imgg.src = image[i];
  carousel_div.append(imgg);
  i = i + 1;

  let ss = setInterval(function () {
    imgg.src = image[i];
    carousel_div.append(imgg);
    i++;
    // body.append(div);

    if (i == image.length) {
      i = 0;
    }
  }, 3000);
}
slide_show();
