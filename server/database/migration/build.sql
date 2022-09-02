BEGIN;

DROP TABLE IF EXISTS users posts likes comments CASCADE;

CREATE TABLE users (
    id INTEGER SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL UNIQUE,
    email VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(50) NOT NULL
);

CREATE TABLE posts (
    id INTEGER SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT,
    likes INTEGER DEFAULT 0,
    post_date TIMESTAMP DEFAULT now(),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE likes (
    id INTEGER SERIAL PRIMARY KEY,
    likes_number INTEGER DEFAULT 0,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    post_id INTEGER,
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TABLE comments (
    id INTEGER SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    post_id INTEGER,
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

COMMIT;
