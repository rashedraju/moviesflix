import axios from 'axios';
import { API_BASE_URL, API_KEY } from '../constants/index';

export const fetchPopularMovies = async () =>
    axios.get(`${API_BASE_URL}discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`);

export const fetchHighestRatedMovies = async () =>
    axios.get(`${API_BASE_URL}discover/movie?sort_by=vote_average.desc&api_key=${API_KEY}`);

export const fetchMovieDetails = async (id) =>
    axios.get(`${API_BASE_URL}movie/${id}?api_key=${API_KEY}`);

export const fetchMoviesByTitle = async (query = '') =>
    axios.get(`${API_BASE_URL}search/movie?query=${query}&api_key=${API_KEY}`);

export const fetchMoviesByGenre = async (id) =>
    axios.get(`${API_BASE_URL}discover/movie?with_genres=${id}&api_key=${API_KEY}`);

export const fetchMoviesByYear = async (id) =>
    axios.get(`${API_BASE_URL}discover/movie?primary_release_year=${id}&api_key=${API_KEY}`);
