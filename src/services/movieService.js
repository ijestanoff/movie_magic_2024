const Movie = require('../models/Movie');

exports.getAll = () => Movie.find();

//TODO: filter resolved in DB
exports.search = (title, genre, year) => {
    let query = {};

    if (title) {
        query.title = new RegExp(title,'i');
    }

    if (genre) {
        query.genre = genre.toLowerCase();
    }

    if (year) {
        query.year = year;
    }

    return Movie.find(query);
};

exports.getOne = movieId => Movie.findById(movieId).populate('casts');

exports.create = movieData => Movie.create(movieData);

exports.edit = (movieId, movieData) => Movie.findByIdAndUpdate(movieId, movieData)

exports.attach = async (movieId, castId) => {
    // return Movie.findByIdAndUpdate(movieId, {$push: {casts: castId}});
    const movie = await this.getOne(movieId);

    // TODO: validate castId if exist
    // TODO: validate if cast is already added
    movie.casts.push(castId);

    await movie.save();

    return movie;
};

exports.delete = (movieId) => Movie.findByIdAndDelete(movieId);