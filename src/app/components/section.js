export default (title, link, children = '') => `
    <section class="section">
        <div class="section_heading">
            <h2 class="heading heading-primary">${title}</h2>
            ${link && `<a href="${link}" class="see-all">See All</a>`}
        </div>
        <div class="collection">
            ${children}
        </div>
    </section>
`;
