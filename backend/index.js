const express = require('express');
// const mysql = require('mysql2')
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const port =5001;  

app.use(cors({
    origin: '*', // allow all origins (for testing)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// const db = mysql.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'Shamlal@123',
//     database:'connectDB'
// });

// db.connect((err) => {
//     if (err) {
//       console.error('MySQL connection error:', err);
//       return;
//     }
//     console.log('Connected to MySQL database');
// });

mongoose.connect('mongodb+srv://username:password@cluster48608.zbpg1v7.mongodb.net/testDB?retryWrites=true&w=majority&appName=Cluster48608', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    location: String,
    college: String,
    year: Number
});
  
const User = mongoose.model('User', userSchema);

app.get('/api/users', async (req, res) => {
    try {
      const users = await User.find(); // get all users
      res.json(users);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
});

// app.get('/api/users', (req, res) => {
//     const sql = 'SELECT * FROM users';
  
//     db.query(sql, (err, results) => {
//       if (err) {
//         return res.status(500).json({ error: err.message });
//       }
//       res.json(results);
//     });
// });

// app.get('/api/users/',(req,res)=>{
//     const list = [
//         {
//           "name": "Janvi",
//           "college": "ABC University",
//           "email": "jsofficialcom@gmail.com",
//           "year": "2023",
//           "location": "New York"
//         },
//         {
//           "name": "Meenu",
//           "college": "ABC University",
//           "email": "honeycom@gmail.com",
//           "year": "2023",
//           "location": "New York"
//         },
//         {
//           "name": "Yashu",
//           "college": "ABC University",
//           "email": "jsofficialcom@gmail.com",
//           "year": "2023",
//           "location": "New York"
//         }
//     ];

//     res.json(list);
// })

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})



