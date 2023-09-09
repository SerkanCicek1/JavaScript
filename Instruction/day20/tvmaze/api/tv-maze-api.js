const baseUrl = 'http://api.tvmaze.com';

export const searchShows = (query, callback) => {
    const url = `${baseUrl}/search/shows?q=${query}`;
    fetch(url, { method: 'GET' })
        .then(res => res.json())
        .then(data => callback(data))
};

// export { searchShows };