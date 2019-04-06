/*
	Make a seeds.sql file where you insert 5 actors into the actors table
*/
USE animals_db;

Create database animals_db;
Use animals_db;

CREATE TABLE animals (
    id INT AUTO_INCREMENT,
    animal_name VARCHAR(255) NOT NULL,
    PRIMARY KEY (id)
)  ENGINE=INNODB;

INSERT INTO animals (animal_name) VALUES ("Jirafa"), ('Hipopotamo'), ('Leon'), ('Alce'),('Gorila');