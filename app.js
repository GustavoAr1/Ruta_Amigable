const express = require('express');

const app = express();

const port = 8080;


app.get('/', (req, res) => {


    res.send('Bienvenidos!! Los problemas difíciles de resolver han de ser bienvenidos, ya que son una oportunidad de evolucionar y aprender algo que no sabías.');
})



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
})
process.env.RUNKIT_ENDPOINT_URL;