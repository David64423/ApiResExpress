import {config} from 'dotenv';

config()

console.log()
console.log(process.env.DB_PORT)



export const PORT= process.env.PORT || 5000; 
export const DB_USER = process.env.DB_USER || 'root';
export const DB_PASSWORD = process.env.DB_PASSWORD || '';
export const DB_HOST = process.env.DB_HOST || '127.0.0.1'; 
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb';
export const DB_PORT = process.env.DB_PORT || 3306;

console.log(PORT)
console.log(DB_USER)
console.log(DB_PASSWORD)
console.log(DB_HOST)
console.log(DB_DATABASE)
console.log(DB_PORT)

if(process.env.DB_PASSWORD== ""){
    console.log("Funka bien")
}

//= companydb