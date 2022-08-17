const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config({ path: `../../.env` });

const MOVIE_URL = `${process.env.API_URL}/movie`;
const headers = {
  Authorization: `Bearer ${process.env.TOKEN}`
}
/**
 * 
 * Get all movies for one api
 * 
 */
const getAllMovies = (params = {}) => {
  return fetch(`${MOVIE_URL}?` + new URLSearchParams(params), { headers })
    .then(res => res.json())
    .then(res => res.docs)
    .catch(e => {
      throw e;
    });
}

/**
 * 
 * Get one specific movie from id 
 * 
 */

const getMovieById = (id) => {
  return fetch(`${MOVIE_URL}/${id}`, { headers })
    .then(res => res.json())
    .then(res => res.docs[0])
    .catch(e => {
      throw e;
    });
}

/**
 * 
 * Get Quotes for one specific movie
 * 
 */
const getQuotesByMovieId = (movieId) => {
  return fetch(`${MOVIE_URL}/${movieId}/quote`, { headers })
    .then(res => res.json())
    .then(res => {
      return res.docs;
    })
    .catch(e => {
      throw e;
    })
}

module.exports = { getAllMovies, getMovieById, getQuotesByMovieId };