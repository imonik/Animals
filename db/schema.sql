/*
mysql -u root -p < schema.sql

create a database called actors_db. Make an actors table with an id and actor_name
DROP DATABASE actors_db;
*/


Create database animals_db;
Use animals_db;

CREATE TABLE animals (
    id INT AUTO_INCREMENT,
    animal_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)  ENGINE=INNODB;