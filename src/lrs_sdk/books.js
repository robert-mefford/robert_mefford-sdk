const fetch = require('node-fetch');
const dotenv = require('dotenv');
dotenv.config({ path: `../../.env` });

/**
 * 
 * Get all books for one api
 * params: This object represent the several queries such as sorting, filtering
 * 
 */

const getAllBooks = (params = {}) => {
  return fetch(`${process.env.API_URL}/book?` + new URLSearchParams(params))
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

const getBookById = (id) => {
  return fetch(`${BOOK_URL}/${id}`)
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
const getChaptersByBookId = (bookId) => {
  return fetch(`${BOOK_URL}/${bookId}/chapter`)
    .then(res => res.json())
    .then(res => {
      return res.docs;
    })
    .catch(e => {
      throw e;
    })
}

getAllBooks().then(res => console.log(res));