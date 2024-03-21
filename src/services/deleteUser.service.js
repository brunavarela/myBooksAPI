import users from "../database/users";

const deleteUserService = (id) => {
  const userIndex = users.findIndex((element) => element.id === id);

  if (userIndex === -1) {
    return "Usuário não encontrado.";
  }

  users.splice(userIndex, 1);

  return "Usuário deletado";
};

export default deleteUserService;
