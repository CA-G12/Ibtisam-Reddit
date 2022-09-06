BEGIN;

INSERT INTO users (id, username, email, password) values (
    '1000', 'Ibtisam Hemmo', 'ib@gmail.com', '$2a$10$AARieU8vicJzFma95E8MxOGWNzEqlz5pqhkuLWxFoN0AGYPA4.jTi'
);

INSERT INTO users (id, username, email, password) values (
    '600', 'Nawraz Hemmo', 'na@gmail.com', '$2a$10$AARieU8vicJzFma95E8MxOGWNzEqlz5pqhkuLWxFoN0AGYPA4.jTi'
);

INSERT INTO users (id, username, email, password) values (
    '700', 'Bushra Hemmo', 'bu@gmail.com', '$2a$10$AARieU8vicJzFma95E8MxOGWNzEqlz5pqhkuLWxFoN0AGYPA4.jTi'
);

INSERT INTO posts (id, title, content, likes, user_id) values (
    '1000', 'This is post title', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta nulla omnis. Non asperiores a tenetur sequi sed aliquid quisquam. Numquam ea quam aperiam beatae.', '3', '1000'
);

INSERT INTO posts (id, title, content, likes, user_id) values (
    '2000', 'This is title of my post', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta nulla omnis. Non asperiores a tenetur sequi sed aliquid quisquam. Numquam ea quam aperiam beatae.', '10', '600'
);

INSERT INTO posts (id, title, content, likes, user_id) values (
    '3000', 'This is title of my post', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta nulla omnis. Non asperiores a tenetur sequi sed aliquid quisquam. Numquam ea quam aperiam beatae.', '5', '700'
);

INSERT INTO comments (id, content, post_id, user_id) values(
    '2000', 'This is great', '1000', '1000'
);

INSERT INTO comments (id, content, post_id, user_id) values(
    '2001', 'This is great Post', '1000', '600'
);
INSERT INTO comments (id, content, post_id, user_id) values(
    '2200', 'Working Fine', '2000', '1000'
);

COMMIT;