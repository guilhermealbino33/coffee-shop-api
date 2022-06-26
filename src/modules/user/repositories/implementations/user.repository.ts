import { IUser } from "../../../../models/user.model";
import { IUserRepository } from "../IUserRepository";

class UserRepository implements IUserRepository {
  create(): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  findById(id: string): Promise<IUser> {
    throw new Error("Method not implemented.");
  }
  delete(user: IUser): void {
    throw new Error("Method not implemented.");
  }
}
