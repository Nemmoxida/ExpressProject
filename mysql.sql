-- for mysql database

CREATE DATABASE uas_pbp;
USE uas_pbp;

-- Create users table
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL
);

-- Create notes table
CREATE TABLE notes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    id_user INT NOT NULL,
    FOREIGN KEY (id_user) REFERENCES users(id)
);

-- Insert users
INSERT INTO users (username) VALUES
('alice'),
('bob'),
('charlie');

-- Insert notes for each user
INSERT INTO notes (title, content, id_user) VALUES
('Alice Note 1', 'Content for Alice note 1', 1),
('Alice Note 2', 'Content for Alice note 2', 1),
('Bob Note 1', 'Content for Bob note 1', 2),
('Bob Note 2', 'Content for Bob note 2', 2),
('Charlie Note 1', 'Content for Charlie note 1', 3),
('Charlie Note 2', 'Content for Charlie note 2', 3);