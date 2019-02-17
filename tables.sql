CREATE TABLE reimbursements (
	id SERIAL PRIMARY KEY,
	amount DECIMAL(12, 2),
	date_submitted TIMESTAMP,
	date_resolved TIMESTAMP,
	description VARCHAR(250),
	receipt bytea,
	author INTEGER REFERENCES users (id) NOT NULL,
	resolver INTEGER REFERENCES users (id) NOT NULL,
	status INTEGER REFERENCES reimb_statuses (id) NOT NULL,
	type INTEGER REFERENCES reimb_types (id) NOT NULL
);

CREATE TABLE reimb_statuses (
	id SERIAL PRIMARY KEY,
	status VARCHAR(10)
);

CREATE TABLE reimb_types (
	id SERIAL PRIMARY KEY,
	type VARCHAR(10)
);

CREATE TABLE user_roles (
	id SERIAL PRIMARY KEY,
	role VARCHAR(10)
);

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(50) NOT NULL UNIQUE,
	password VARCHAR(50),
	first_name VARCHAR(100),
	last_name VARCHAR(100),
	email VARCHAR(150) NOT NULL UNIQUE,
	user_role INTEGER REFERENCES user_roles (id) NOT NULL
);

SELECT * FROM reimbursements;

INSERT INTO user_roles (role) VALUES ('ADMIN');

DROP TABLE reimbursements;