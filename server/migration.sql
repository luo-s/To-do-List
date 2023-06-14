DROP TABLE IF EXISTS todo;

CREATE TABLE todo (
  id SERIAL,
  description TEXT
);

INSERT INTO todo(description) VALUES('Homework');
INSERT INTO todo(description) VALUES('Grocery');
INSERT INTO todo(description) VALUES('Meeting');
INSERT INTO todo(description) VALUES('Workout');
INSERT INTO todo(description) VALUES('Laundry');
