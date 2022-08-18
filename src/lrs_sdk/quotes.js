const fetch = require('node-fetch');
const { headers, QUOTE_URL } = require('../utils/config');
/**
 * 
 * Get all quotes for one api
 * 
 */
const getAllQuotes = async (params = {}) => {
  let data = await getQuoteOnePage({...params, page: 1});
  return data;
}

/**
 * Get quotes for one page
 */

const getQuoteOnePage = async (params) => {
  return fetch(`${QUOTE_URL}?` + new URLSearchParams(params), { headers })
    .then(res => res.json())
    .then(res => {
      if(params.page == res.pages) {
        return res.docs;
      }
      return getQuoteOnePage({...params, page: params.page+1}).then(nextRes => {
        return [...res.docs, ...nextRes];
      })
    })
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

const getQuoteByRegex = (option, regex) => {
  return getAllQuotes({ [option]: regex });
}

module.exports = { getAllQuotes, getQuoteById, getQuoteByRegex };