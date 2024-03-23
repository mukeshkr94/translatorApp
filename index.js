const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const { translate } = require('free-translate');
// const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res)=>{
    const data = [{
        "id": 1,
        "name": "John Doe",
        "age": 20,
        "gender": "male",
        "grade": "A",
        "courses": ["Mathematics", "Physics", "English"]
      },
      {
        "id": 2,
        "name": "Jane Smith",
        "age": 19,
        "gender": "female",
        "grade": "B+",
        "courses": ["Chemistry", "Biology", "History"]
      },
      {
        "id": 3,
        "name": "Alice Johnson",
        "age": 21,
        "gender": "female",
        "grade": "A-",
        "courses": ["Computer Science", "Psychology", "Sociology"]
      },
      {
        "id": 4,
        "name": "Bob Brown",
        "age": 18,
        "gender": "male",
        "grade": "B",
        "courses": ["Art", "Music", "Physical Education"]
      }]
    try {
        res.status(201).send({student : data});
    } catch (error) {
        res.status(500).send({message : error.message});
    }
})

app.post('/api/text_translation', async(req, res)=>{
 const {text} = req.body;
    try {
        const translatedText = await translate(`${text}`, { from: 'en', to: 'fr' });
        res.status(201).send({translation:translatedText});
    } catch (error) {
        res.status(500).send({message:error.message});
    }
      
})

app.listen(5000, ()=>{
    console.log(`server is running on port number ${"PORT"}`);
})