import mysql from 'mysql2';

const pool = mysql.createConnection({
    host:'localhost',
    user:'sqluser',
    password: 'password',
    database: 'notes_app'
});

const result = pool.query('SELECT * FROM notes', (err, res) => {
    console.log('',res);
})