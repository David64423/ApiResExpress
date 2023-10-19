import {pool} from '../db/db.js';
import path from 'path';
//ESTAS IMPORTACIONES Y COSAS DE ABAJO ES PARA QUE ME ACEPTE LA VARIABLE DIRNAME
import { fileURLToPath } from 'url';
import { dirname } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//ESTAS IMPORTACIONES Y COSAS DE ARRIBA ES PARA QUE ME ACEPTE LA VARIABLE DIRNAME

export const ping=async (req,res)=>{
   
    const [result] = await pool.query('select 2+2 as result');
    res.json(result);
    
}

export const index= (req, res)=>{
    
    res.sendFile('index.html',{
        root: path.join(__dirname,'/../static')
    })
}