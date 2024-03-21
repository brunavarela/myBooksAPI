// criar src
// yarn init -y
// yarn add express uuid
// yarn add nodemon sucrase -D
// yarn add bcryptjs
// yarn add jsonwebtoken
import express from "express";

import usersRouter from "./routes/users.routes";
import booksRouter from "./routes/books.routes";

const app = express();
app.use(express.json());

app.use("/users", usersRouter);
app.use("/books", booksRouter);

app.listen(3000, () => console.log("App running at http://localhost:3000"));
