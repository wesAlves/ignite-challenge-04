import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = new User();

    Object.assign(user, {
      name,
      email,
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    const userIndex = this.users.findIndex((user) => user.id === id);

    if (userIndex < 0) {
      throw new Error("User not found!!!");
    }

    return this.users[userIndex];
  }

  findByEmail(email: string): User | undefined {
    const userIndex = this.users.findIndex((user) => user.email === email);

    const user = this.users[userIndex];

    return user;
  }

  turnAdmin(receivedUser: User): User {
    const user = this.findById(receivedUser.id);

    Object.assign(user, {
      name: user.name,
      email: user.email,
      admin: true,
    });

    return user;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
