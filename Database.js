const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',        // your WAMP MySQL username
    password: '',        // your MySQL password
    database: 'ElectionDB' // your database name
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database.');
});

module.exports = connection;
