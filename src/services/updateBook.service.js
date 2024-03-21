import books from "../database/books";

const updateBookService = (title, author, year, owner_id) => {
  const updateBook = {
    title,
    author,
    year,
    owner_id,
  };

  const bookIndex = books.findIndex((element) => element.id === owner_id);

  if (bookIndex === -1) {
    return "Livro não encontrado";
  }

  books[bookIndex] = { ...books[bookIndex], ...updateBook };

  return books[bookIndex];
};

export default updateBookService;
