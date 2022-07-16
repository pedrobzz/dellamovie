import { Category } from "@prisma/client";

export interface CategoryRepositoryModel {
  getCategory(id: string): Promise<Category>;
  getCategories(): Promise<Category[]>;
  updateCategory(
    id: string,
    category: Omit<Category, "createdAt" | "updatedAt">,
  ): Promise<Category>;
  createCategory(
    category: Omit<Category, "createdAt" | "updatedAt">,
  ): Promise<Category>;
  updateAllCategories(): Promise<Category[]>;
}
