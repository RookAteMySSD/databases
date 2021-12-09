CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  id integer AUTO_INCREMENT primary key,
  txt varchar(50),
  room varchar(20),
  username varchar(20),
  foreign key(room) references rooms(id),
  foreign key(username) references users(id)
);

CREATE TABLE rooms (
  id integer primary key,
  room varchar(20)
)

CREATE TABLE users (
  id integer primary key,
  user varchar(20)
)

/* Create other tables and define schemas for them here! */

-- insert into messages values(1, 'test', 'roomtest', 'ronin');
-- update messages set username='somthing else' where id=1;


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

