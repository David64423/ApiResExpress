import {pool} from '../db/db.js';

export const getEmployees= async (req, res)=> {
   try{
    const [employees]=await pool.query('select * from employee');
    res.send(employees);

   } catch(err){
        res.status(500).json({
            "message":"Algo fue mal"
        })
   }
};

export const createEmployee= async (req, res)=>{
    try{
        const {name, salary}= req.body;
    console.log("name es "+name);
    console.log("salary es "+salary);
    const [rows]= await pool.query('insert into employee (emp_name, salary) values(?,?)',[name,salary]);
    
    res.send({rows})
    } catch(err){
        res.status(500).json({
            "message":"Algo fue mal"
        })
    }
}


export const  updateEmployee= async (req, res)=>{
    try{
        const {id}= req.params;
        const {name, salary}= req.body;


        const dataUpdate= await pool.query('update employee set emp_name= ifnull(?,emp_name),salary= ifnull(?,salary) where emp_id=?',[name,salary,id]);
        console.log(dataUpdate[0].affectedRows);

        if(dataUpdate[0].affectedRows<=0){
           return res.status(404).json({
            "message":"Hubo un problema al actualizar el empleado"
        });
        }
        else{
         const [employee] = await pool.query('select * from employee where emp_id=?',[id]);
            res.json(employee);
        }
    
    } catch(err){

        res.status(500).json({
            "message":"Algo fue mal"
        })

    }
    

}

export const deleteEmployee= async (req, res)=>{
    
    try{
        const {id}= req.params;

        const dataDelete =await pool.query('delete from employee where emp_id=?',[id]);

        console.log(dataDelete[0].affectedRows)

        if(dataDelete[0].affectedRows<=0){
            return res.status(404).json({
                "message":"Error al borrar el employee"
            })
        }

        res.send("Employed deleted");
    } catch(err){
        res.status(500).json({
            "message":"Algo fue mal"
        })
    }
}



export const getEmployee= async (req, res)=>{
    try{
        const {id}= req.params;
        console.log(`id es ${id}`);

        const [employee]=await pool.query('select * from employee where emp_id=?',[id*1])
    
        if(employee.length <=0){
            return res.status(404).json({
            message:'Employee not found'
        })
        }
        else{
            return res.send(employee)
        }
    } catch(err){
        res.status(500).json({
            "message":"Algo fue mal"
        })
    }
}