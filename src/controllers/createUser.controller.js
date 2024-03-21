import createUserService from "../services/createUser.service";

const createUserController = async (request, response) => {
  const { name, email, password } = request.body;

  const user = await createUserService(name, email, password);

  return response.json(user);
};

export default createUserController;
