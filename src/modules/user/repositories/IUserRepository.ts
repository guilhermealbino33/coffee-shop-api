import { IUser } from "../../../models/user.model";

export interface IUserRepository {
  create(): Promise<IUser>;
  findById(id: string): Promise<IUser>;
  delete(user: IUser): void;
}
