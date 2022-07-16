import { ManageCategories } from "../../use-cases";
import { makeCategoriesRepository } from "../makeCategoriesRepository";

export const makeManageCategories = (): ManageCategories => {
  return new ManageCategories(makeCategoriesRepository());
};
