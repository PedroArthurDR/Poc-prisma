import { deleteMovieRepository, getMovies,postMovieRepository,updateMovieRepository,qtdMoviesRepository } from "../repositories/repository.js";
import { Request,Response } from "express";
import { movie,movies,qtdMovie, update } from "../protocols/movie.js";
import { QueryResult } from "pg";
import { movieSchema, updateMovieSchema } from "../schemas/movie.schema.js";
export async function getAllMovies(req: Request,res: Response){
    try{
        const movies: QueryResult<movies> = await getMovies()
      return  res.status(200).send(movies.rows)
    }
      catch (err) {
        res.status(422).send(err.message);
        return
    }
}

export async function postMovie(req: Request,res: Response){
    try{
        const body = req.body as movie
       const {error} = movieSchema.validate(body)
       if(error){
        res.status(400).send({
            message: error.message
        })
        return
       }
        await postMovieRepository(body)
        return  res.sendStatus(202)
    }
    catch (err) {
        res.status(422).send(err.message);
        return
    }
}

export async function updateMovieStatus(req: Request,res: Response){
    try{
        const {movieId} = req.params
        const body =  req.body as update
        const {error} = updateMovieSchema.validate(body)
        if(error){
         res.status(400).send({
             message: error.message
         })
         return
        }
        await updateMovieRepository(body,movieId)
        return  res.sendStatus(202)
    }
    catch (err) {
        res.status(422).send(err.message);
        return
    }
}

export async function deleteMovie(req: Request,res: Response){
    const {movieId} = req.params
    try{
        await deleteMovieRepository(movieId)
        return  res.sendStatus(202)
    }
    catch (err) {
        res.status(422).send(err.message);
        return
    }
}

export async function qtdMoviesByStream(req: Request,res: Response){
    const { movieStream} = req.params
    try{
        const rows: QueryResult<qtdMovie>=await qtdMoviesRepository( movieStream)
        return  res.status(200).send(rows.rows)
    }
    catch (err) {
        res.status(422).send(err.message);
        return
    }
}