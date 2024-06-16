const Cast = require('../models/Cast');
const Movie = require('../models/Movie');

exports.getAll = () => Cast.find();
exports.create = castData => Cast.create(castData);
exports.getByIds = (castIds) => {
    //const movie = await Movie.findById(movieId);
    const casts = Cast.find({_id: {$in: castIds}});

    return casts; 
};