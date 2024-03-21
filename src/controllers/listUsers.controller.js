import listUsersService from "../services/listUser.service";

const listUsersController = (request, response) => {
  const users = listUsersService();

  return response.json(users);
};

export default listUsersController;
