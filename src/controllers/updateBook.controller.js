import updateBookService from "../services/updateBook.service";

const updateBookController = (request, response) => {
  const { owner_id } = request.params;
  const { title, author, year } = request.body;

  const updateBook = updateBookService(title, author, year, owner_id, );

  return response.json(updateBook);
};

export default updateBookController;
