import listBooksService from "../services/listBook.service";

const listBooksController = (request, response) => {
  const books = listBooksService();

  return response.json(books);
};

export default listBooksController;
