export type movie = {
    name: string,
    stream:string,
    genderId:number,
    status:string,
    description?:string
}

export type movies ={
    id:number,
    movieName: string,
    movieStream: string,
    genderName:string,
    movieStatus: string,
    movieDescription?: string
  }

  export type qtdMovie = {
    count: number,
    movieStream: string
  }

  export type update = Omit<movie,"name"|"stream"|"genderId">