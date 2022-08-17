const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config({ path: `../../.env` });

const QUOTE_URL = `${process.env.API_URL}/quote`;
const headers = {
  Authorization: `Bearer ${process.env.TOKEN}`
}
/**
 * 
 * Get all quotes for one api
 * 
 */
const getAllQuotes = (params = {}) => {
  return fetch(`${QUOTE_URL}?` + new URLSearchParams(params), { headers })
    .then(res => res.json())
    .then(res => res.docs)
    .catch(e => {
      throw e;
    });
}

/**
 * 
 * Get one specific quote from id 
 * 
 */

const getQuoteById = (id) => {
  return fetch(`${QUOTE_URL}/${id}`, { headers })
    .then(res => res.json())
    .then(res => res.docs[0])
    .catch(e => {
      throw e;
    });
}
