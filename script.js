const apiKey = "7ddc9a09923b50aeaf97dbfe82431b4d";

var currentApiPage = 0;
var currentSearchTerm = '';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const movieAreaGrid = document.getElementById('movies-grid');
const loadMoreBtn = document.getElementById('load-more-movies-btn');
const closeSearchBtn = document.getElementById('close-search-btn');


fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`)
    .then(response => response.json())
    .then(data => showMovies(data.results));

showMovies = data => {
    const moviesDiv = document.querySelector('#movies-grid');
    data.forEach(data => {        
        //getting movie title
        const movieTitle = document.createElement('p');
        movieTitle.innerText = `${data.original_title}`;
        //getting movie rating
        const movieRating = document.createElement('p');
        movieRating.innerText = `${data.vote_average}`;

        const image = document.createElement('img');
        image.img = getMovies(data.id);


        moviesDiv.append(image);
        moviesDiv.append(movieTitle);
        moviesDiv.append(movieRating);
})
}

async function getMovies(posterPath){
    fetch(`https://api.themoviedb.org/3/search/movie/${posterPath}/images?api_key=${apiKey}`)
            .then(response => response.json())
            .then(data => 
                console.log(data));   
}

async function getResults(searchTerm){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`)
        .then(response => response.json())
        .then(data => showMovies(data.results));

showMovies = data => {
    const moviesDiv = document.querySelector('#movies-grid');
    data.forEach(data => {        
        //getting movie title
        const movieTitle = document.createElement('p');
        movieTitle.innerText = `${data.original_title}`;
        //getting movie rating
        const movieRating = document.createElement('p');
        movieRating.innerHTML = `${data.vote_average}`;

        moviesDiv.append(movieTitle);
        moviesDiv.append(movieRating);
})
}}

async function handleFormSubmit(event){
    event.preventDefault();
    movieAreaGrid.innerHTML = '';
    currentSearchTerm = searchInput.value;
    getResults(currentSearchTerm);
    searchInput.value = '';
    currentApiPage++;
}

searchForm.addEventListener('submit', handleFormSubmit);

