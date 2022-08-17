const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config({ path: `../../.env` });

const CHARACTER_URL = `${process.env.API_URL}/character`;
const headers = {
  Authorization: `Bearer ${process.env.TOKEN}`
}
/**
 * 
 * Get all movies for one api
 * 
 */
const getAllCharacters = (params = {}) => {
  return fetch(`${CHARACTER_URL}?` + new URLSearchParams(params), { headers })
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

const getCharacterById = (id) => {
  return fetch(`${CHARACTER_URL}/${id}`, { headers })
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
const getQuotesByCharacterId = (characterId) => {
  return fetch(`${CHARACTER_URL}/${characterId}/quote`, { headers })
    .then(res => res.json())
    .then(res => {
      return res.docs;
    })
    .catch(e => {
      throw e;
    })
}
