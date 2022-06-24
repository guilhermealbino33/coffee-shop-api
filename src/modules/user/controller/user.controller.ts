import { Request, Response } from "express";

export default class userController {
  async createUserHandler(res: Response, req: Request) {
    const user = await container.resolve(createUserUseCase);

    return res.send(user);
  }
}
