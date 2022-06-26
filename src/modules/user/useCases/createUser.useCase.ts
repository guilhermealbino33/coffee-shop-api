import { inject } from "tsyringe";

import usersService from "../services/implementations/users.service";

export default class createUserUseCase {
  constructor(@inject("UsersService") private usersService: usersService) {}
  async execute() {
    const newUser = this.usersService.createUser();
    return null;
  }
}
