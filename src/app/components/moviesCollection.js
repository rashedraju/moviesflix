import { IMAGE_BASE_URL } from '../constants';
import starIcon from '../../assets/icons/star.svg';

export default (movies) =>
    movies
        .map(
            (movie) => `
            <article class="card">
                <a href="movie?id=${movie.id}" class="article_link">
                    <img
                        src="${IMAGE_BASE_URL}${movie.poster_path}"
                        alt="${movie.title}"
                        class="card_img"
                    />
                    <h4 class="card_title">${movie.title}</h4>
                    <div class="card_rating">
                        <img
                            src="${starIcon}"
                            alt=""
                            class="card_rating-icon"
                        />
                        <span class="card_rating-count">${movie.vote_average}</span>
                    </div>
                </a>
            </article>
        `
        )
        .join('');
