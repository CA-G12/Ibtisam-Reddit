BEGIN;

DROP TABLE IF EXISTS users, posts, comments, likes CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    avatar TEXT DEFAULT 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXRqoZG_6ccmI8VKwHyBiJj0ki7zVtzJP1qA&usqp=CAU'
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT,
    likes INTEGER DEFAULT 0,
    post_date TIMESTAMP DEFAULT now(),
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

CREATE TABLE likes (
    id SERIAL PRIMARY KEY,
    likes_number INTEGER DEFAULT 0,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    post_id INTEGER,
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

CREATE TABLE comments (
    id SERIAL PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES users(id),
    post_id INTEGER,
    FOREIGN KEY (post_id) REFERENCES posts(id)
);

COMMIT;
