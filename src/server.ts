import express, { request, response } from "express";
import "./database";

const app = express();

app.get("/", (request, response) => {
  return response.send("Hello Yago :D");
});

app.post("/", (request, response) => {
  return response.json({ message: "User created"});
});

app.listen(3333, () => console.log("Server is running on 3333"));