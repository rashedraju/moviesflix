const mainElement = document.getElementsByTagName('main')[0];

export const searchElement = document.getElementById('search');

export const barsElement = document.getElementById('header_bars');

export const asideLeftElement = document.getElementById('aside-left');

export const categoryGenreElement = document.getElementById('category-genre');
export const releaseDateElement = document.getElementById('category-release-date');

export const render = (element = '') => {
    mainElement.insertAdjacentHTML('beforeend', element);
};
