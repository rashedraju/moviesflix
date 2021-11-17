import route from './lib/router';
import {
    getPopularMovies,
    getHighestRatedMovies,
    getMovieDetails,
    getMoviesByGenre,
    searchMovieByTitle,
    getMoviesByYear
} from './containers/movie';
import { render, barsElement, asideLeftElement, searchElement } from './lib/dom';
import moviesCollection from './components/moviesCollection';
import section from './components/section';
import movieDetails from './components/movieDetails';
import { renderGenres, renderReleaseDate } from './containers/categories';

(async () => {
    const { path, params } = route();

    if (path === '/') {
        try {
            const popularMovies = await getPopularMovies();
            const highestRatedMovies = await getHighestRatedMovies();

            const popularMoviesHighlighted = popularMovies.slice(0, 12);
            const highestRatedMoviesHighlighted = highestRatedMovies.slice(0, 12);

            render(
                section('Popular Movies', 'popular', moviesCollection(popularMoviesHighlighted))
            );
            render(
                section(
                    'Highest Rated Movies',
                    'highest-rated',
                    moviesCollection(highestRatedMoviesHighlighted)
                )
            );
        } catch (error) {
            console.log(error);
        }
    }

    if (path === '/popular') {
        try {
            const popularMovies = await getPopularMovies();

            render(section('Popular Movies', '', moviesCollection(popularMovies)));
        } catch (error) {
            console.log(error);
        }
    }

    if (path === '/highest-rated') {
        try {
            const highestRatedMovies = await getHighestRatedMovies();
            render(section('Highest Rated', '', moviesCollection(highestRatedMovies)));
        } catch (error) {
            console.log(error);
        }
    }

    if (path === '/search') {
        try {
            const movies = await searchMovieByTitle(params.query);
            render(section('Search Results', '', moviesCollection(movies)));
        } catch (error) {
            console.log(error);
        }
    }
    if (path === '/genre') {
        try {
            const movies = await getMoviesByGenre(params.id);
            render(section(`Genre: ${params.name}`, '', moviesCollection(movies)));
        } catch (error) {
            console.log(error);
        }
    }

    if (path === '/release') {
        try {
            const movies = await getMoviesByYear(params.year);
            render(section(`Release Year: ${params.year}`, '', moviesCollection(movies)));
        } catch (error) {
            console.log(error);
        }
    }

    if (path === '/movie') {
        try {
            const movie = await getMovieDetails(params.id);
            console.log(movie);
            render(movieDetails(movie));
        } catch (error) {
            console.log(error);
        }
    }

    barsElement.addEventListener('click', () => {
        asideLeftElement.classList.toggle('aside_left-show');
    });

    searchElement.addEventListener('submit', (e) => {
        const query = e.target[0].value.split(' ').join('+');
        window.location.href = `search?query=${query}`;
        e.preventDefault();
    });

    renderGenres();
    renderReleaseDate();
})();
