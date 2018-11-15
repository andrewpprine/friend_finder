DROP DATABASE IF EXISTS friendfinderdb;
CREATE DATABASE friendfinderdb;
USE friendfinderdb;

CREATE TABLE users
(
   id INT NOT NULL
   AUTO_INCREMENT,
	fullname VARCHAR
   (50) NOT NULL,
	link VARCHAR
   (100),
	userscore VARCHAR
   (25) NOT NULL, 
	PRIMARY KEY
   (id)
);

   INSERT INTO users
      (fullname, link, gender, userscore)
   VALUES
      ("John Doe", "https://www.facebook.com/johndoe/", "[1,1,1,1,1,1,1]");
   INSERT INTO users
      (fullname, link, gender, userscore)
   VALUES
      ("Jane Doe", "https://www.facebook.com/janedoe/", "[2,2,2,2,2,2,2]");
