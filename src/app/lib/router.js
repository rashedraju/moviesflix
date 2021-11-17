export default () => {
    const urlpath = window.location.pathname.split('?');
    const path = urlpath[0];
    const params = window.location.search
        .replace('?', '')
        .split('&')
        .reduce((acc, cur) => {
            const curSplit = cur.split('=');
            return { ...acc, [curSplit[0]]: curSplit[1] };
        }, {});

    return { path, params };
};
