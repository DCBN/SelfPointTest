const express = require('express');
const app = express();

// Serve:a den kompilerade koden
// app.use('/build', express.static('build'));

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

const server = app.listen(1337, 'localhost', () => {
    console.log(`Running on ${server.address().address}:${server.address().port}`)
})