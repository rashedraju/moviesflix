import { IMAGE_BASE_URL } from '../constants';
import starIcon from '../../assets/icons/star.svg';

export default (movie) => `
    <article class="details">
        <h1 class="details_title">${movie.title}: ${movie.tagline}</h1>
        <img
            src="${IMAGE_BASE_URL}${movie.image}"
            alt="${movie.title}"
            class="details_image"
        />
        <div class="card_rating">
            <img
                src="${starIcon}"
                alt=""
                class="card_rating-icon"
            />
            <span class="card_rating-count">${movie.vote_average}</span>
        </div>
        <ul class="details_genres">
            ${movie.genres
                .map(
                    (genre) => `
                        <li class="details_genres-item"> <a href="genre?id=${genre.id}&name=${genre.name}"> ${genre.name} </a> </li>
                    `
                )
                .join('')}
        </ul>
        <p class="details_info">${movie.overview}</p>
        <div class="details_info"><strong>Status: </strong> <span>${movie.status}</span> </div>
        <div class="details_info"><strong>Release Date: </strong> <span>${
            movie.release_date
        }</span> </div>
        <div class="details_info">
            <strong>Spoken Languages: </strong>
            ${movie.spoken_languages
                .map(
                    (language) => `
                        <span> ${language.name} </span>
                    `
                )
                .join('<span>&#46;</span>')}
        </div>
    </article>
`;
