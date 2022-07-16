import { CategoriesRepositoryModel } from "../../domain/repositories";
import { PrismaCategoriesRepository } from "../infra/repositories";
import { makePrismaClient } from "./makePrismaClient";
import { makeTheMovieDB } from "./makeTheMovieDB";

let categoriesRepository: CategoriesRepositoryModel;
export const makeCategoriesRepository = (): CategoriesRepositoryModel => {
  if (!categoriesRepository) {
    categoriesRepository = new PrismaCategoriesRepository(
      makePrismaClient(),
      makeTheMovieDB(),
    );
    categoriesRepository.updateAllCategories();
  }

  return categoriesRepository;
};
