export default (categories) =>
    categories
        .map(
            (category) => `
                <li class="category_item">
                    <a href="genre?id=${category.id}&name=${category.name}" class="category_link">${category.name}</a>
                </li>
            `
        )
        .join('');
