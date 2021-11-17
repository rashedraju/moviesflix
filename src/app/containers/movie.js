import {
    fetchPopularMovies,
    fetchMovieDetails,
    fetchHighestRatedMovies,
    fetchMoviesByGenre,
    fetchMoviesByTitle,
    fetchMoviesByYear
} from '../lib/api';

export const getMovieDetails = async (movieId) => {
    try {
        const response = await fetchMovieDetails(movieId);
        const movie = {
            ...response.data,
            image: response.data.backdrop_path ?? response.data.poster_path
        };

        return movie;
    } catch (error) {
        return error;
    }
};

export const getMoviesByGenre = async (movieId) => {
    try {
        const response = await fetchMoviesByGenre(movieId);
        return response.data.results;
    } catch (error) {
        return error;
    }
};

export const getMoviesByYear = async (year) => {
    try {
        const response = await fetchMoviesByYear(year);
        return response.data.results;
    } catch (error) {
        return error;
    }
};

export const searchMovieByTitle = async (title = '') => {
    try {
        const response = await fetchMoviesByTitle(title);
        return response.data.results;
    } catch (error) {
        return error;
    }
};

export const getPopularMovies = async () => {
    try {
        const response = await fetchPopularMovies();
        return response.data.results;
    } catch (error) {
        return error.message;
    }
};

export const getHighestRatedMovies = async () => {
    try {
        const response = await fetchHighestRatedMovies();
        return response.data.results;
    } catch (error) {
        return error;
    }
};
