const router = require('express').Router();

const movieService = require('../services/movieService');
const castService = require('../services/castService');

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    const newMovie = req.body;
    try {
        await movieService.create(newMovie);
        res.redirect('/');
    } catch (error) {
        console.log(error.message);
        //res.status(400).end();
        res.redirect('/create');
    }

});

router.get('/movies/:movieId', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieService.getOne(movieId).lean();
    //const casts = await castService.getByIds(movie.casts).lean();

    movie.ratingStars = new Array(Number(movie.rating)).fill(true);
    //movie.ratingStars = '&#x2605; '.repeat(movie.rating);

    res.render('details', { movie }); 
});

router.get('/movies/:movieId/attach', async (req, res) => {
    const movie = await movieService.getOne(req.params.movieId).lean();
    const casts = await castService.getAll().lean();

    res.render('movie/attach', { ...movie, casts });
});

router.post('/movies/:movieId/attach', async (req, res) => {
    const castId = req.body.cast;
    const movieId = req.params.movieId;
    
    await movieService.attach(movieId, castId);
    res.redirect(`/movies/${movieId}/attach`);
});

module.exports = router;