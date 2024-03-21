import deleteBookService from "../services/deleteBook.service";

const deleteBookController = (request, response) => {
  const { owner_id } = request.params;

  const deleteBook = deleteBookService(owner_id);

  return response.json(deleteBook);
};

export default deleteBookController;
