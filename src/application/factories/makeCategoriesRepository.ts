import { CategoriesRepositoryModel } from "../../domain/repositories";
import { PrismaCategoriesRepository } from "../infra/repositories";
import { makePrismaClient } from "./makePrismaClient";
import { makeTheMovieDB } from "./makeTheMovieDB";

export const makeCategoriesRepository = (): CategoriesRepositoryModel => {
  return new PrismaCategoriesRepository(makePrismaClient(), makeTheMovieDB());
};
