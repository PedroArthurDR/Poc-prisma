GET: /movies
Lista todos filmes

GET: /movie/movieStream
Retorna a quantidade de filmes de determinada

POST: /movies
Body: { name: "Jhon Wick", stream: "netflix", genderId: 1, status: "assistido", description: "ótimo" }
adiciona um novo filme no banco

PATCH: /movie/:movieId
Body: { status: "finalizado", description: "médio" }
atualizada o status e a descrição de determinado filme


DELETE: /movie/:movieId
deleta um filme através do id