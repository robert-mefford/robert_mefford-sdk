const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config({ path: `../../.env` });

const CHAPTER_URL = `${process.env.API_URL}/chapter`;
const headers = {
  Authorization: `Bearer ${process.env.TOKEN}`
}
/**
 * 
 * Get all chapters for one api
 * 
 */
const getAllChapters = (params = {}) => {
  return fetch(`${CHAPTER_URL}?` + new URLSearchParams(params), { headers })
    .then(res => res.json())
    .then(res => res.docs)
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