import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";


class ListCategoriesController {
  constructor(private listcreateCategoriesUseCase: ListCategoriesUseCase) { }
  handle(request: Request, response: Response): Response {
    const all = this.listcreateCategoriesUseCase.execute()
    return response.json(all)
  }
}

export { ListCategoriesController }