const API_KEY = '82544c3f762f512de9140148342d7eed';
const BASE_URL = 'https://api.themoviedb.org/3';

const trending = () => {
	return fetch(`${BASE_URL}/trending/movie/week?api_key=${API_KEY}`).then(res => res.json());
};

const upcoming = () => {
	return fetch(`${BASE_URL}/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1&region=KR`).then(res => res.json());
};

const nowPlaying = () => {
	return fetch(`${BASE_URL}/movie/now_playing?api_key=${API_KEY}&language=en-US&page=1&region=KR`).then(res => res.json());
};

export const moviesApi = { trending, upcoming, nowPlaying };
