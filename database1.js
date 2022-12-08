import mysql from 'mysql';

const pool = mysql.createConnection({
    host:'localhost',
    user:'sqluser',
    password: 'password',
    database: 'notes_app'
})


    pool.connect((err, res) => {
        if (err) 
        {
         console.log('error!', err);   
        }
        else {
            console.log('database connected!');
        }
    })

    pool.query('select * from notes', (err, res) => 
    {
        console.log('res', res);
    })

  
