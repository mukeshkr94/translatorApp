const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const { translate } = require('free-translate');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.get('/', (req, res)=>{
    try {
        res.status(201).send({message : 'Our App is working good'});
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

app.listen(PORT, ()=>{
    console.log(`server is running on port number ${PORT}`);
})