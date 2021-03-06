BEGIN;

DROP TABLE IF EXISTS users, todos CASCADE;

CREATE TABLE users (  
    id SERIAL PRIMARY KEY,
    username  VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(50) UNIQUE NOT NULL,
    password  TEXT NOT NULL
);

CREATE TABLE todos (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id),
    todo_content TEXT NOT NULL,
    completed BOOLEAN DEFAULT false,
    createdAt TIMESTAMP NOT NULL
);

COMMIT;
