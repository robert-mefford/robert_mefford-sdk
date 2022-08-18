# Overview
This is a basic SDK for [The One API](https://the-one-api.dev). The API is an open-source API for Lord of The Rings and The Hobbit information, including movies, books, quotes and characters information.

The SDK creates an easy way to communicate with the API. It does most of the heavy lifting for you.
If the API was the ring, this SDK would be Frodo and Sam carrying it for you.

# Getting started
## First Step
You need to sing up account to One API and get a new access token.

## Installation
To install, use `npm`:
> npm install

## Initialize Token
You need to create a .env file and set the API_URL and TOKEN;

API_URL = https://the-one-api.dev
TOKEN = access token you get from One API

## Books Functions:
```
getAllBooks(params={}): Get all books from One API
getBookById(id): Get one specific book with id
getChaptersByBookId(bookId): Get chapters for one specific book
getBooksByRegex(option, regex): Get books with regular expression
```

## Chapters Functions:
```
getAllChapters(params={}): Get all chapters from One API
getChaptersOnePage(params): Get chapters on one page
getChapterById(str id): Get one specific page with id
getChaptersByRegex(option, regex): Get chapters with regular expression
```

## Characters Functions
```
getAllCharacters(params={}): Get all characters from One API
getCharactersOnePage(params): Get characters on one page
getCharacterById(str id): Get one spcific character with id
getQuotesByCharacterId(characterId): Get all quotes for one spcific character id
getCharacterByRegex(option, regex): Get characters with regular expression
```

## Movies Functions
```
getAllMovies(params = {}): Get All movies from One API
getMovieById(id): Get one spcific movie with id
getQuotesByMovieId(movieId): Get quotes for one spcific movie
getMoviesByRegex(option, regex): Get movies with regular expression
```

## Quotes Functions
```
getAllQuotes(params={}): Get all quotes from One API
getQuoteOnePage(params): Get quotes for one page
getQuoteById(str id): Get quote with specific quote id
getQuoteByRegex(option, regex): Get quotes with regular expression
```
