GET: /movies

GET: /movie/movieStream

POST: /movies
Body: { name: "Jhon Wick", stream: "netflix", genderId: 1, status: "assistido", description: "ótimo" }

PATCH: /movie/:movieId
Body: { status: "finalizado", description: "médio" }

DELETE: /movie/:movieId