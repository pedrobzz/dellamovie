import * as trpc from "@trpc/server";
import { z } from "zod";
import { makeManageCategories } from "../factories/use-cases";

export const categoriesController = trpc
  .router()
  .query("getCategory", {
    input: z.string(),
    async resolve({ input }) {
      const categoryManager = makeManageCategories();
      const category = await categoryManager.getCategory(input);
      return category;
    },
  })
  .query("getCategories", {
    async resolve() {
      const categoryManager = makeManageCategories();
      const categories = await categoryManager.getCategories();
      return categories;
    },
  })
  .query("updateAllCategories", {
    async resolve() {
      const categoryManager = makeManageCategories();
      const categories = await categoryManager.updateAllCategories();
      return categories;
    },
  })
  .query("getMultipleCategories", {
    input: z.array(z.string()),
    async resolve({ input }) {
      const categoryManager = makeManageCategories();
      const categories = await categoryManager.getMultipleCategories(input);
      return categories;
    },
  });
