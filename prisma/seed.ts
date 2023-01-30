import prisma from "../src/database/db.js";

async function main() {
    await prisma.moviesGenders.createMany({
        data:[
            {
                genderName:"ação"
            }, {
                genderName:"drama"
            }, {
                genderName:"terror"
            }, {
                genderName:"comédia"
            }, {
                genderName:"romance"
            }, {
                genderName:"ficção científica"
            }, {
                genderName:"suspense"
            }, {
                genderName:"musical"
            },
        ]
    })
    await prisma.allMovies.createMany({
        data:[
            {
                movieName: "jhon wick",
                movieStream: "netflix",
                genderId: 1,
                movieStatus: "Não assisti",
                movieDescription: " "
              },{
                movieName: "jhon wick 2",
                movieStream: "netflix",
                genderId: 1,
                movieStatus: "Não assisti",
                movieDescription: " "
              },
              {
                movieName: "jhon wick 3",
                movieStream: "netflix",
                genderId: 1,
                movieStatus: "Não assisti",
                movieDescription: " "
              },

        ]
    })
}

main().then(()=>{
    console.log("Registro feit ocom sucesso")
}).catch(e => { console.error(e)}).finally(async () =>{
    await prisma.$disconnect();
})