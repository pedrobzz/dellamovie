import { Category } from "@prisma/client";

export interface CategoriesRepositoryModel {
  getCategory(id: string): Promise<Category>;
  getCategories(): Promise<Category[]>;
  updateCategory(
    id: string,
    category: Omit<Category, "createdAt" | "updatedAt" | "id">,
  ): Promise<Category>;
  createCategory(
    category: Omit<Category, "createdAt" | "updatedAt">,
  ): Promise<Category>;
  updateAllCategories(): Promise<Omit<Category, "createdAt" | "updatedAt">[]>;
}
