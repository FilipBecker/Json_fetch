const express = require('express')
const app = express();
const PORT = 8080;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile('index');
});

app.listen(PORT, () => {
    console.log('listening on port ' + PORT);
});