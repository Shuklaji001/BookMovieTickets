const servercall = (filter) =>{
    let api=`http://localhost:3000/moviesData`
    if(filter)
      api=`http://localhost:3000/moviesData?q=${filter}`

    fetch(api)
    .then((res) => res.json())
    .then((res) => moviesData(res))
}

var movie ;

const moviesData = (data)=> {
  movie = data;
  document.querySelector("#movies").innerHTML = "";
  data.map(function (e) {
    let div = document.createElement("div");

    let image = document.createElement("img");
    image.setAttribute("class", "poster");
    image.setAttribute("src", e.poster);

    let name = document.createElement("h3");
    name.innerText = e.name;

    let date = document.createElement("h3");
    date.innerText = e.date;

    let imdb = document.createElement("h3");
    imdb.innerText = "IMDB Rating: " + e.imdb;

    let genre = document.createElement("h3");
    genre.innerText = "Genre: " + e.genre;

    let more = document.createElement("p");
    more.innerText = "More Info";
    more.setAttribute("class", "more");

    more.addEventListener("click", ()=>{
        localStorage.setItem("movieDetails", JSON.stringify(e))
        window.location.href = "movieDetails.html";
    })

    div.append(image, name, date, imdb , genre , more);

    document.querySelector("#movies").append(div);
  });
}

const ratingsort = ()=> {
  let selected = document.getElementById("sortrating").value;
  console.log(selected);

  if (selected == "htl") {
    movie.sort(function (a, b) {
      return b.imdb - a.imdb;
    });
  }

  if (selected == "lth") {
    movie.sort(function (a, b) {
      return a.imdb - b.imdb;
    });
  }

  moviesData(movie);
}


const filtermovies = ()=> {
 let selected = document.getElementById("filtergenre").value
 console.log(selected);
 servercall(selected)
}

servercall();