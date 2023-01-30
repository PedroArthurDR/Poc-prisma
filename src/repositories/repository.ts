import prisma from "../database/db.js";
import { movie,movieDbCreate,movies, moviesFromdb, qtdMovie, update} from "../protocols/movie.js";
export async function getMovies() {
 const allMoviesObj: moviesFromdb[] =  await prisma.allMovies.findMany({
        orderBy: {
            id: "desc"
          },
          include:{
        moviesGenders :{
            select:{
                genderName : true
            }
        }
          }
    })
    console.log(allMoviesObj)
    const finalObj: movies[] = allMoviesObj.map((e,i)=>{
        const obj : movies = {
            movieName: e.movieName,
            movieStream: e. movieStream,
            genderName: e.moviesGenders.genderName,
            movieStatus:e.movieStatus,
            movieDescription: e. movieDescription
        }
        return obj
    } )
    return finalObj 
}

export async function postMovieRepository(body:movie) {
    const {name,stream,genderId,status,description} = body as movie
    const postmovie: movieDbCreate = {
        movieName:name,
        movieStream:stream,
        genderId: genderId,
        movieStatus: status,
        movieDescription:description
    }
    return await prisma.allMovies.create({
        data:postmovie
    })
}

export async function updateMovieRepository(body:update,movieId:string) {
    const id =Number( movieId)
    const {status,description} = body as update
      if(description){
          return  await prisma.allMovies.update(
            {where:{
            id
            },
            data:{
                movieStatus: status,
                movieDescription:description
            }
        }
          )
         
      }
      return  await prisma.allMovies.update(
        {where:{
        id
        },
        data:{
            movieStatus: status,
        }
    }
      )

}

export async function deleteMovieRepository(movieId:string) {
    const id =Number( movieId)
    const deleteConfirmation = await prisma.allMovies.delete({
        where:{
            id
        }
    }); 
   console.log(deleteConfirmation)
        return deleteConfirmation
}

export async function qtdMoviesRepository( movieStream:string)  {

    const allMoviesObj =  await prisma.allMovies.findMany({
        include:{
            moviesGenders :{
                select:{
                    genderName : true
                }
            }
              }
    }) 
       let qtdMoviesByStream = 0
       allMoviesObj.map( e => {
        if(e.movieStream === movieStream ){
            qtdMoviesByStream++
        }
       })

       const finalObj: qtdMovie = {
            count: qtdMoviesByStream,
            movieStream: movieStream
       }
       return finalObj
}