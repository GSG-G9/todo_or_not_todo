INSERT INTO
    users (username, email, password)
VALUES
    ('muhammad', 'muhammad@test.com', '123456asd'), ('ahmed', 'ahmed@test.com', '123456asd');

INSERT INTO
    todos (users_id, todo_content, completed, createdAt)
VALUES
    (1, 'make coffee', false, CURRENT_TIMESTAMP), (2, 'Clean House', false, CURRENT_TIMESTAMP),
    (1, 'Make anything', false, CURRENT_TIMESTAMP);
