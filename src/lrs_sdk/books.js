import fetch from 'node-fetch';
const API_URL = 'https://the-one-api.dev/v2';
const BOOK_URL = `${API_URL}/book`

/**
 * 
 * Get all books for one api
 * params: This object represent the several queries such as sorting, filtering
 * 
 */
const getAllBooks = (params = {}) => {
  return fetch(`${BOOK_URL}?` + new URLSearchParams(params))
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