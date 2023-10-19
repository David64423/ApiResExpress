import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Ahora puedes usar __dirname
console.log(__dirname);

const app=express();

app.get("/",(req, res)=>{
    res.send(__dirname)
});

app.listen(5001,()=>{
    console.log("Listen at the port 5001")
});
