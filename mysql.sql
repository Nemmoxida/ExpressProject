-- for mysql database

CREATE DATABASE uas_pbp;
USE uas_pbp;

-- Create users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password varchar(255) NOT NULL
);

-- Create notes table
CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    id_user INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id)
);

