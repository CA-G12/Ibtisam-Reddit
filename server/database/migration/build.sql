BEGIN;

DROP TABLE IF EXISTS users, posts, comments, likes CASCADE;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(30) NOT NULL,
    email VARCHAR(100) NOT NULL,
    password VARCHAR(100) NOT NULL,
    avatar TEXT DEFAULT 'https://cdn-icons-png.flaticon.com/512/1053/1053244.png'
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
