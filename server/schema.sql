DROP DATABASE chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE users (
  id integer AUTO_INCREMENT primary key,
  username varchar(20)
);

CREATE TABLE messages (
  id integer AUTO_INCREMENT primary key,
  txt varchar(400) not null,
  room varchar(20),
  userid integer not null
);





/* Create other tables and define schemas for them here! */

-- insert into messages values(1, 'test', 'roomtest', 'name');
-- update messages set username='somthing else' where id=1;


/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

