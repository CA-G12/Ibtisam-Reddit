BEGIN;

INSERT INTO users (id, username, email, password) values (
    '1', 'ibtisam', 'ib@gmail.com', '123'
);

INSERT INTO posts (id, title, content, likes, user_id) values (
    '1', 'This is post title', 'This is post content', '3', '1'
);

COMMIT;