import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const PORT = process.env.PORT;
const app = express();

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

app.use(express.json());

app.get("/api/todo", (req, res) => {
  db.query("SELECT * FROM todo").then((result) => {
    res.send(result.rows);
  });
});

app.post("/api/todo", (req, res) => {
  const { description } = req.body;
  db.query("INSERT INTO todo (description) VALUES ($1) RETURNING *", [
    description,
  ]).then((result) => {
    res.send(result.rows[0]);
  });
});

app.delete("/api/todo/:id", (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM todo WHERE id = $1 RETURNING *", [id]).then(
    (result) => {
      res.send(result.rows[0]);
    }
  );
});

app.patch("/api/todo/:id", (req, res) => {
  const id = req.params.id;
  const { description } = req.body;
  db.query("UPDATE todo SET description = $1 WHERE id = $2 RETURNING *", [
    description,
    id,
  ]).then((result) => {
    res.send(result.rows[0]);
  });
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
