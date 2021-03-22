import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.body;

    const all = this.listAllUsersUseCase.execute(id);

    return response.send();
  }
}

export { ListAllUsersController };
