import books from "../database/books";

const deleteBookService = (owner_id) => {
  const bookIndex = books.findIndex((element) => element.id === owner_id);

  if (bookIndex === -1) {
    return "Livro não encontrado";
  }

  books.splice(bookIndex, 1);

  return "Livro deletado";
};

export default deleteBookService;
