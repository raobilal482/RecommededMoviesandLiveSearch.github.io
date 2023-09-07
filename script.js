const key = "52b1fe3b5913ea9a4cc0a690fc71e9de";
const url = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&&api_key=${key}`;
const imgpath = "https://image.tmdb.org/t/p/w1280";
const searchapi = `https://api.themoviedb.org/3/search/movie?&api_key=${key}&query=`;
const moviediv = document.getElementById("movielist");
const getMovies = (url) => {
	moviediv.innerHTML = "";
	fetch(url)
		.then((response) => response.json())
		.then((movies) => {
			movies.results.forEach((movie) => {
				const title = movie.title;
				const desc = movie.overview;
				const image = movie.poster_path;
				const movielist = document.createElement('li');
				movielist.classList.add("movie-list-item");
				movielist.innerHTML = `
                            <img src="${imgpath + image}" alt="${title}">
                            <h3>${title}</h3>
                            <p>${desc}</p>
                        `;
				moviediv.appendChild(movielist);
			})
		})
}
getMovies(url);
document.querySelector('#search-input').addEventListener('keyup', function(event) {
	var elem = event.target.value;
	if (elem != "") {
		var finalsearch = `${searchapi+elem}`;
		getMovies(finalsearch);
	} else {
		getMovies(url);
	}
})