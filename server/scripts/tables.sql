create table users(
	id serial primary key,
	username varchar(30) not null,
	password varchar(255) not null
);

create table wallet(
	id serial primary key,
	amount int not null,
	user_id int REFERENCES users(id)
);

create table transaction_type(
	id serial primary key,
	name varchar(255) not null
);

create table transactions(
	id int,
	amount int not null,
	title varchar(255) not null,
	user_id int REFERENCES users(id)
);