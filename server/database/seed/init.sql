BEGIN;

INSERT INTO users (id, username, email, password) values (
    '1', 'Ibtisam Hemmo', 'ib@gmail.com', '$2a$10$AARieU8vicJzFma95E8MxOGWNzEqlz5pqhkuLWxFoN0AGYPA4.jTi'
);

INSERT INTO users (id, username, email, password) values (
    '2', 'Nawraz Hemmo', 'na@gmail.com', '$2a$10$AARieU8vicJzFma95E8MxOGWNzEqlz5pqhkuLWxFoN0AGYPA4.jTi'
);

INSERT INTO users (id, username, email, password) values (
    '3', 'Bushra Hemmo', 'bu@gmail.com', '$2a$10$AARieU8vicJzFma95E8MxOGWNzEqlz5pqhkuLWxFoN0AGYPA4.jTi'
);

INSERT INTO posts (id, title, content, likes, user_id) values (
    '1', 'This is post title', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta nulla omnis. Non asperiores a tenetur sequi sed aliquid quisquam. Numquam ea quam aperiam beatae.', '3', '1'
);

INSERT INTO posts (id, title, content, likes, user_id) values (
    '2', 'This is title of my post', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta nulla omnis. Non asperiores a tenetur sequi sed aliquid quisquam. Numquam ea quam aperiam beatae.', '10', '2'
);

INSERT INTO posts (id, title, content, likes, user_id) values (
    '3', 'This is title of my post', 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil dicta nulla omnis. Non asperiores a tenetur sequi sed aliquid quisquam. Numquam ea quam aperiam beatae.', '5', '3'
);

COMMIT;