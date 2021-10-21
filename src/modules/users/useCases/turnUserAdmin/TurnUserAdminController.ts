import { Request, Response } from "express";

import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  // eslint-disable-next-line prettier/prettier
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) { }

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.params;
      const newUserAdmin = this.turnUserAdminUseCase.execute({ user_id });

      return response.status(201).json(newUserAdmin);
    } catch (error) {
      return response.status(404).json({
        error: error.message,
      });
    }
  }
}

export { TurnUserAdminController };
