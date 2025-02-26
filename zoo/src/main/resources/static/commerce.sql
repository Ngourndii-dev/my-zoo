CREATE DATABASE my_zoo;

\c my_zoo;

CREATE TABLE animal_template(
  id serial primary key,
  name varchar (100) not null unique,
  species varchar(100) not null
);

CREATE TABLE animal (
  id serial primary key,
  id_animal_template int references animal_template(id),
  sex VARCHAR(50) CHECK (sex IN ('male', 'female')),
  origin varchar(50) not null,
  price float,
  rent float,
  status VARCHAR(50) CHECK (status IN ('available', 'unavailable')),
  color varchar (50) not null
);

CREATE TABLE event (
  id serial primary key,
  id_animal int references animal(id),
  image varchar(20) not null,
  situation_date date not null
);

CREATE TABLE review (
    id SERIAL PRIMARY KEY,
    author VARCHAR(50) NOT NULL,
    id_animal INT REFERENCES animal(id),
    rating INT CHECK (rating BETWEEN 1 AND 5),
    comment VARCHAR(100),
    status VARCHAR(50) CHECK (status IN ('pending', 'available', 'unavailable'))
);

CREATE TABLE client (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(100) NOT NULL,
    phone_number VARCHAR(15) UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_date DATE NOT NULL,
    status VARCHAR(50) CHECK (status IN ('append', 'available', 'unavailable')),
    quantity int not null,
    id_client INT REFERENCES client(id),
    id_animal INT REFERENCES animal(id)
);

CREATE TABLE operation(
  id serial primary key,
  price FLOAT NOT NULL CHECK (price >= 0),
  id_animal int references animal(id),
  operation_date date,
  operation_type varchar(50) not null
);

ALTER TABLE animal_template
ADD COLUMN image_url VARCHAR(50);

ALTER TABLE animal
ADD COLUMN image_url VARCHAR(50);
