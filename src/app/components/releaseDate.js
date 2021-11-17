export default (dates) =>
    dates
        .map(
            (date) => `
                <li class="category_item">
                    <a href="release?year=${date.year}" class="category_link">${date.year}</a>
                </li>
            `
        )
        .join('');
