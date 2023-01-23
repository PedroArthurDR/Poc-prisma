import  pg from "pg";
import 'dotenv/config'

// const configDatabase = {
   //connectionString: process.env.DATABASE_URL,
 //  ssl: {
 //   rejectUnauthorized: false,
 //  },
 //};


const configDatabase = {
  connectionString: process.env.DATABASE_URL
 }; 


const { Pool } = pg;

const connection = new Pool(configDatabase);


export default connection;