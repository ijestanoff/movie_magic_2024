const movies = [{
    _id: 1,
    title: 'Jungle Cuise',
    genre: 'Adventure',
    director: 'Spilberg',
    date: '2024',
    imageUrl: '/img/jungle-cruise.jpeg',
    rating: 5,
    description: 'Dreaming about saving countless lives and having another adventure, ..',
}];

exports.getAll = () => {
    return movies.slice();
};

exports.getOne = (movieId) => {
    const movie = movies.find(movie => movie._id == movieId);
    return movie;
};

exports.create = (movieData) => {
    movieData._id = movies[movies.length - 1]._id + 1;
    movies.push(movieData);
};