const movies = [];

exports.getAll = () => {
    return movies.slice();
}

exports.create = (movieData) => {
    console.log(movieData);
    movies.push(movieData);
};