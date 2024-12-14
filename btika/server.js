const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Simpan status checkbox ke dalam array sementara
let checkboxStatus = {};

// API untuk mendapatkan status checkbox
app.get('/status', (req, res) => {
    res.json(checkboxStatus);
});

// API untuk menyimpan status checkbox
app.post('/status', (req, res) => {
    const { id, checked } = req.body;
    checkboxStatus[id] = checked; // Simpan status checkbox berdasarkan ID
    res.json({ message: 'Checkbox status updated', checkboxStatus });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
