# crossword
API that returns possible answers to an incomplete crossword entry

To run

  > node server.js

Uses GraphQL and requests are in the form: 

>query {
>
> word(queryString: "t??")
>
>}

Currently, only 3 letter words are supported. The code can easily be expanded to any number of letters and will be done in the future.
