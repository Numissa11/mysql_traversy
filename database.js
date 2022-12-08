import mysql from 'mysql2';

const pool = mysql.createPool({
    host:'localhost',
    user:'sqluser',
    password: 'password',
    database: 'notes_app'
}).promise()


export async function getNotes() 
{
    const [result] = await pool.query('SELECT * FROM notes');
    return result
}

export async function getNote(id) 
{
    const [result] = await pool.query(`
    SELECT * FROM notes
    WHERE id = ${id}
    `);
    return result[0]
}


export async function createNote(title, contents){
    const myTitle= title
    const cont= contents
    const [result] = await pool.query(`INSERT INTO notes(title, contents) VALUES('${myTitle}','${cont}')`)
    return result
}

const creation = await createNote('myBAD', 'Youpiiiiiiii');
const notes = await getNotes();
const note = await getNote(1);
console.log('note', notes);
console.log('creation',creation.insertId);