require('dotenv').config();
const Server = require('./models/server')
const mysql = require('mysql');


const server = new Server();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'odontologo_db'
});

connection.connect(error => {
    if (error) throw error;
    console.log('Database online');
});

server.listen();


