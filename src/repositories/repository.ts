import connection from "../database/db.js";
import { movie,movies, qtdMovie, update} from "../protocols/movie.js";
import { QueryResult } from "pg";
export async function getMovies(): Promise<QueryResult<movies>> {
        return await connection.query(`
        SELECT a.id, a."movieName",a."movieStream",b."genderName",a."movieStatus",a."movieDescription"
    FROM "allMovies" as a  INNER JOIN "moviesGenders" as b ON b.id = a."genderId"
    ORDER BY a.id DESC  ;
        `)

}

export async function postMovieRepository(body:movie): Promise<QueryResult<{}>> {
    const {name,stream,genderId,status,description} = body as movie
       return  await  connection.query(`
         INSERT INTO "allMovies" ("movieName","movieStream","genderId","movieStatus","movieDescription") 
         VALUES ($1,$2,$3,$4,$5);  ;
        `,[name,stream,genderId,status,description])
}

export async function updateMovieRepository(body:update,movieId:string): Promise<QueryResult<{}>> {
    const {status,description} = body as update
        if(description){
            return  await connection.query(`
            UPDATE "allMovies" SET "movieStatus" = $1,"movieDescription"=$2  WHERE "allMovies".id = $3
            `,[status,description,movieId])
         
        }
        return  await  connection.query(`
         UPDATE "allMovies" SET "movieStatus" = $1 WHERE "allMovies".id = $2
        `,[status,movieId])

}

export async function deleteMovieRepository(movieId:string): Promise<QueryResult<{}>> {
    const deleteConfirmation = await connection.query('DELETE from "allMovies" WHERE "allMovies".id = $1 ', [movieId]); 
    console.log(deleteConfirmation)
        return deleteConfirmation
}

export async function qtdMoviesRepository( movieStream:string): Promise<QueryResult<qtdMovie>> {
        return await  connection.query(`
        SELECT COUNT(a."movieStream"), a."movieStream" 
        FROM "allMovies" as a WHERE a."movieStream"=$1
        GROUP BY a."movieStream"
        `,[movieStream])
}