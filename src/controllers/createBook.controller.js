import createBookService from "../services/createBook.service";

const createBookController = (request, response) => {
  const { title, author, year } = request.body;

  const book = createBookService(title, author, year);

  return response.json(book);
};

export default createBookController;
