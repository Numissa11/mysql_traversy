CREATE DATABASE notes_app;
USE notes_app;

CREATE TABLE notes(
    id INTEGER PRIMARY KEY AUTO_INCREMENT, 
    title VARCHAR(250) NOT NULL, 
    contents TEXT NOT NULL,
    created TIMESTAMP NOT NULL DEFAULT NOW()
    );

INSERT INTO notes(title,contents)
VALUES
('Pic Chaussy', 'Pic Chaussette'),
('Pic Numi', 'Pic Numette');

SELECT * FROM notes;