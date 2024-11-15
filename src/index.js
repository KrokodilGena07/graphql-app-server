const express = require('express');
const cors = require('cors');
require('dotenv/config');
const router = require('./router');

const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors({
    credentials: true,
    origin: '*'
}));
app.use('/api', router);

const start = () => {
    try {
        app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
    } catch (e) {
        console.log(e);
    }
};

start();