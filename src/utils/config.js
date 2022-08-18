const dotenv = require('dotenv');
dotenv.config({ path: `../../.env` });

const BOOK_URL = `${process.env.API_URL}/book`;
const CHAPTER_URL = `${process.env.API_URL}/chapter`;
const CHARACTER_URL = `${process.env.API_URL}/character`;
const MOVIE_URL = `${process.env.API_URL}/movie`;
const QUOTE_URL = `${process.env.API_URL}/quote`;

const headers = {
  Authorization: `Bearer ${process.env.TOKEN}`
}

module.exports = { BOOK_URL, CHAPTER_URL, CHARACTER_URL, MOVIE_URL, QUOTE_URL, headers };