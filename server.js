const express = require('express')
const app = express()
const path = require('path');
const port = 3000
//const {getTokenSlack} = require('./lib/auth/getTokenSlack.ts');
const getTokenSlack = require('./lib/auth/getTokenSlack1');
const {createChatManager} = require('./index');

let newChatObj = createChatManager();

const url = '/auth';
getTokenSlack(app, url);

app.get('/', (req ,res) => {
    console.log(newChatObj.clientList);
    res.sendFile(path.join(__dirname + '/example_pages/index.html'));
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


