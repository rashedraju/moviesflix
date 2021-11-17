import categoryGenres from '../components/categoryGenre';
import releaseDates from '../components/releaseDate';
import { categoryGenreElement, releaseDateElement } from '../lib/dom';

export const renderGenres = () => {
    const genres = [
        { id: 28, name: 'action' },
        { id: 12, name: 'adventure' },
        { id: 878, name: 'science-fiction' },
        { id: 18, name: 'drama' },
        { id: 35, name: 'comedy' },
        { id: 27, name: 'horror' },
        { id: 10752, name: 'war' },
        { id: 16, name: 'animation' }
    ];

    const elements = categoryGenres(genres);
    categoryGenreElement.insertAdjacentHTML('beforeend', elements);
};

export const renderReleaseDate = () => {
    const genres = [
        { year: 2021 },
        { year: 2020 },
        { year: 2019 },
        { year: 2018 },
        { year: 2017 },
        { year: 2016 },
        { year: 2015 },
        { year: 2014 },
        { year: 2013 },
        { year: 2012 },
        { year: 2011 },
        { year: 2010 }
    ];

    const elements = releaseDates(genres);
    releaseDateElement.insertAdjacentHTML('beforeend', elements);
};
