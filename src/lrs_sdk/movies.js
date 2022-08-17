const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config({ path: `../../.env` });

const MOVIE_URL = `${process.env.API_URL}/movie`;
const headers = {
  Authorization: `Bearer ${process.env.TOKEN}`
}
/**
 * 
 * Get all books for one api
 * params: This object represent the several queries such as sorting, filtering
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
 * Get one specific book from id 
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
 * Get Chapters for one specific book
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