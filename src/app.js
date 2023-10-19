import express, { urlencoded } from 'express';
import employeesRoutes from './routes/employees.routes.js';
import indexRoutes from './routes/index.routes.js'
//const {pathname} = new URL('../src', import.meta.url)


const app=express();


app.use(express.urlencoded({extended:false}));
app.use(express.json())

app.use(indexRoutes);
app.use('/api',employeesRoutes);


app.use((req, res, next)=>{
    res.status(404).json({
        "message":"Page not found"
    })
})

export default app;