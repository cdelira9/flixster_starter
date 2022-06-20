const apiKey = "7ddc9a09923b50aeaf97dbfe82431b4d";

var currentApiPage = 1;
var currentSearchTerm = '';

const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const movieAreaGrid = document.getElementById('movies-grid');
const loadMoreBtn = document.getElementById('load-more-btn');
const closeSearchBtn = document.getElementById('close-search-btn');

async function nowPlaying(){
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
        

        const img = new Image();
        img.src = `https://images.tmdb.org/t/p/w500${data.poster_path}`;

        moviesDiv.append(img);
        moviesDiv.append(movieTitle);
        moviesDiv.append(movieRating);
}) 
}
}

nowPlaying();

async function getResults(searchTerm){
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}&page=${currentApiPage}`)
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

        const img = new Image();
        img.src = `https://images.tmdb.org/t/p/w500${data.poster_path}`;

        moviesDiv.append(img);

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

async function handleCloseSubmit(event){
    document.location.reload(true);
}

closeSearchBtn.addEventListener('click', handleCloseSubmit); 

async function handleShowMeMoreClick(event){
    movieAreaGrid.innerHTML = '';    
    currentApiPage++;
    getResults(currentSearchTerm);
    searchInput.value = '';
}

loadMoreBtn.addEventListener('click', handleShowMeMoreClick)