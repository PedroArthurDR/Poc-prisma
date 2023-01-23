import { Router } from "express";
import { getAllMovies,postMovie, updateMovieStatus,deleteMovie,qtdMoviesByStream } from "../controllers/movies.controller.js";
const router = Router();

router.get("/movies", getAllMovies)
router.get("/movies/:movieStream",qtdMoviesByStream)
router.post("/movies",postMovie)
router.patch("/movie/:movieId",updateMovieStatus)
router.delete("/movie/:movieId",deleteMovie)

export default router;