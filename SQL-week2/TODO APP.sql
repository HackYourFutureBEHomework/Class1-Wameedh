--*Code the following events as SQL scripts on your newly created tables.

Drop table if exists Users;
Drop table if exists Todos;
Drop table if exists Tags;

CREATE TABLE Users (
   User_id int NOT NULL UNIQUE,
   User_name varchar(50) NOT NULL
);
CREATE TABLE Todos (
   Todo_id INT NOT NULL UNIQUE,
   Title VARCHAR NOT NULL,
   Is_done INT NOT NULL,
   Date_created DATETIME default current_timestamp,
   User_id INT NOT NULL,
   Tag_id INT
);
CREATE TABLE Tags(
   Tag_id INT NOT NULL,
   Tag_name varchar NOT NULL
);
--1. Adam signs up for the TODO APP
INSERT INTO Users
VALUES (1,'Adam');

--2. Adam must go to the dentist
INSERT INTO Todos (todo_id,title, is_done, user_id)
VALUES (1, 'Go to the dentist', 0,1);

--3. Adam puts a "health" tag on the dentist todo
INSERT INTO Tags ( Tag_id, Tag_name)
VALUES ( 1, 'Health');

UPDATE Todos
SET Tag_id = 1
WHERE Tag_id IS NULL;

--4. Adam needs to pick up kids from school
INSERT INTO Todos (Todo_id, Title, Is_done, User_id)
VALUES (2, 'Pickup kids from school', 0,1);

--5. Adam remembers that actually, he needs to pick up the kids from the swimming pool, not the school
UPDATE Todos
SET Title = 'Pickup kids from swimming pool'
WHERE Todo_id = 2;

--6. Adam must walk the dog
INSERT INTO Todos (Todo_id, Title, Is_done, User_id)
VALUES (3, 'Walk the dog', 0, 1);

--7. Beth signs up for the TODO APP
INSERT INTO Users
VALUES (2,'Beth');


--8. Beth needs to visit her father, and puts the "family" tag on it
INSERT INTO Todos(Todo_id, Title, Is_done, User_id, Tag_id)
VALUES(4, 'Visiting father', 0,2,2);
 
INSERT INTO Tags ( Tag_id, Tag_name)
VALUES(2, 'Family');

--9. Beth must go to the doctor
--10. Beth puts a "health" tag on the doctor todo
INSERT INTO Todos(Todo_id,title, Is_done, User_id, Tag_id)
VALUES(5, 'Go to the doctor', 0,2,1);


--11. Beth needs to brush her teeth and puts a "health" tag on it
INSERT INTO todos(todo_id,title, is_done, user_id,tag_id)
VALUES(6, 'Needs to brush her teeth ', 0,2,1);


--12. Adam changes the tag of the dentist todo to "urgent"
INSERT INTO Tags (Tag_id, Tag_name) 
VALUES(3, 'Urgent');

UPDATE Todos
SET Tag_id = 3
WHERE Todos.Title = 'Go to the dentist';

--13. Adam has picked up the kids from school, and has walked the dog
UPDATE Todos
SET Is_done = 1
WHERE Todo_id = 2;

UPDATE Todos
SET Is_done = 1
WHERE Todo_id = 3;

--14. Adam deletes all tasks that are marked as done
DELETE 
FROM Todos
WHERE Todos.Is_done = 1;

--15. Adam decides he doesn't like the app and removes his account
DELETE
FROM Users
WHERE Users.User_id = 1;

--16. Beth marks all tasks with a health tag as done
UPDATE Todos
SET Is_done = 1
WHERE Tag_id = 1;

--17. Beth convinces Adam to sign back up, and to put back his urgent dentist task on it
INSERT INTO Users
VALUES (1,'Adam');

INSERT INTO Todos (Todo_id , Title, Is_done, User_id, Tag_id)
VALUES (7, 'Go to the dentist', 0, 2, 2);

--18. Adam creates a todo which says "Use the todo app more often"
INSERT INTO Todos(Todo_id, Title, Is_done, User_id)
VALUES(8, 'Use the todo app more often ', 0,1);

--19. Finally, Adam and Beth decide to merge their users into one user called "Adam and Beth"
SELECT User_id,
GROUP_CONCAT(User_name, ' and ') AS User_name
FROM Users;




