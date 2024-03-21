import books from "../database/books";
import { v4 as uuidv4 } from "uuid";

const createBookService = (title, author, year) => {
  const newBook = {
    title,
    author,
    year,
    owner_id: uuidv4(),
  };

  books.push(newBook);

  return newBook;
};

export default createBookService;
