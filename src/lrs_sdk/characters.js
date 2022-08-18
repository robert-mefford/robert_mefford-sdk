const fetch = require('node-fetch');
const { headers, CHARACTER_URL } = require('../utils/config');
/**
 * 
 * Get all characters for one api
 * 
 */
const getAllCharacters = async(params = {}) => {
  let data = await getCharactersOnePage({ ...params, page: 1 });
  return data;
}

const getCharactersOnePage = (params) => {
  
  return fetch(`${CHARACTER_URL}?` + new URLSearchParams(params), { headers })
    .then(res => res.json())
    .then(res => {
      if(params.page == res.pages) {
        return res.docs;
      }
      return getCharactersOnePage({...params, page: params.page+1}).then(nextRes => {
        return [...res.docs, ...nextRes];
      })
    })
    .catch(e => {
      throw e;
    });
}

/**
 * 
 * Get one specific character from id 
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
 * Get Quotes for one specific character
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

const getCharacterByRegex = (option, regex) => {
  return getAllCharacters({ [option]: regex });
}

module.exports = { getAllCharacters, getCharacterById, getQuotesByCharacterId, getCharacterByRegex};