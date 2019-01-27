# crossword
API that returns possible answers to an incomplete crossword entry

To run

  > node server.js

Uses GraphQL and requests are in the form: 

  query {
    word(queryString: "t??")
  }
