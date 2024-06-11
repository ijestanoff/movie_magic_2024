const router = require('express').Router();
const movieService = require('../services/movieService');

router.get('/', (req, res) => {
    const movies = movieService.getAll();
    res.render('home', { movies });
});

router.get('/about', (req, res) => {
    res.render('about');
});

router.get('/search', (req, res) => {
    const { title, genre, year} = req.query;
    const moviesResult = movieService.search(title, genre, year);

    res.render('search', { movies: moviesResult, title, genre, year });
});

router.all('/404', (req, res) => {
    res.render('404');
});

module.exports = router;