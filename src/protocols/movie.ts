export type movie = {
    name: string,
    stream:string,
    genderId:number,
    status:string,
    description?:string
}

export type movies ={
    movieName: string,
    movieStream: string,
    genderName:string,
    movieStatus: string,
    movieDescription?: string
  }

  export type moviesFromdb ={
    id: number,
    movieName: string,
    movieStream: string,
    genderId:number,
    movieStatus: string,
    movieDescription?: string
    createdAt:Date,
    moviesGenders:{
      genderName:string
    }
  }

  export type qtdMovie = {
    count: number,
    movieStream: string
  }

  export type movieDbCreate = {
    movieName: string,
    movieStream: string,
    genderId:number,
    movieStatus: string,
    movieDescription?: string
  }

  export type update = Omit<movie,"name"|"stream"|"genderId">