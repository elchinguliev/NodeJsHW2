const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = 3003;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/student', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'detail.html'));
});

app.get('/students', (req, res) => {
    fs.readFile(path.join(__dirname, 'public', 'students.json'), 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Error reading student data');
            return;
        }
        res.json(JSON.parse(data));
    });
});





app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
