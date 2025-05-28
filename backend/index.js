const express = require('express');
const mysql = require('mysql2')
const cors = require('cors')
const app = express();
const port =5000;

app.use(cors);

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'Shamlal123',
    database:'my_database'
});

db.connect(err =>{
    if(err) throw err;
    console.log("Connected to my SQL");
})
app.get('/api/users/',(req,res)=>{
    db.query('SELECT * from users',(err,result)=>{
        if(err) return res.status(500).json({error:err.message});
        res.json(result);
    })
})

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})



