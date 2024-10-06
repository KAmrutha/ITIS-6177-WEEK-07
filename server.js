const express = require('express');
const axios = require('axios'); 
const app = express();

app.get('/say', async (req, res) => {
    const searchParams = new URLSearchParams(req.url.split('?')[1]);
    const name = searchParams.get('keyword');

    try {
        
        const response = await axios.get(`https://magenta-pithivier-653074.netlify.app/.netlify/functions/sayname`, {
            params: { name: name } 
        });

        console.log(response.data); 
        res.send(response.data.message); 
    } catch (error) {
        console.error(error); 
        res.status(500).send('Error occurred while fetching data.'); 
    }
});

app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});