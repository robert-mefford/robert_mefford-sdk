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
const getAllQuotes = async (params = {}) => {
  let data = [];
  await getQuoteOnePage({...params, page: 1})
    .then(async res => {
      data = res.docs;
      for(let i = 2; i <= res.pages; i++) {
        getQuoteOnePage({...params, page: i}).then(res => res.docs);
      }
    })
    .catch(e => {
      throw e;
    });
  return data;
}

/**
 * Get quotes for one page
 */

const getQuoteOnePage = async (params) => {
  return fetch(`${QUOTE_URL}?` + new URLSearchParams(params), { headers })
    .then(res => res.json())
    .then(res => res)
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

getAllQuotes().then(res => console.log(res.length));

module.exports = { getAllQuotes, getQuoteById };