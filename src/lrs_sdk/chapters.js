const fetch = require('node-fetch');
const { headers, CHAPTER_URL } = require('../utils/config');
/**
 * 
 * Get all chapters for one api
 * 
 */
const getAllChapters = async(params = {}) => {
  let data = await getChaptersOnePage({ ...params, page: 1 });
  return data;
}

const getChaptersOnePage = (params) => {
  return fetch(`${CHAPTER_URL}?` + new URLSearchParams(params), { headers })
    .then(res => res.json())
    .then(res => {
      if(params.page == res.pages) {
        return res.docs;
      }
      return getChaptersOnePage({...params, page: params.page+1}).then(nextRes => {
        return [...res.docs, ...nextRes];
      })
    })
    .catch(e => {
      throw e;
    });
}

/**
 * 
 * Get one specific chapter from id 
 * 
 */

const getChapterById = (id) => {
  return fetch(`${CHAPTER_URL}/${id}`, { headers })
    .then(res => res.json())
    .then(res => res.docs[0])
    .catch(e => {
      throw e;
    });
}

const getChaptersByRegex = (option, regex) => {
  return getAllChapters({ [option]: regex });
}

module.exports = { getAllChapters, getChapterById, getChaptersByRegex };