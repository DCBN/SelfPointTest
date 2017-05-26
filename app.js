const express = require('express');
const app = express();

// Serve:a den kompilerade koden
 app.use('/build', express.static('build'));

// Skicka index.html vid alla requests
app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Lyssna på servern
const server = app.listen(1337, 'localhost', () => {
    console.log(`Running on ${server.address().address}:${server.address().port}`)
})