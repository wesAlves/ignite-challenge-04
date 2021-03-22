import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { email, name } = request.body;

    const createUser = this.createUserUseCase.execute({ email, name });

    return response.json(createUser);
  }
}

export { CreateUserController };
