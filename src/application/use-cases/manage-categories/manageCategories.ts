import { Category } from "@prisma/client";
import { CategoriesRepositoryModel } from "../../../domain/repositories";

export class ManageCategories {
  constructor(
    private readonly categoriesRepository: CategoriesRepositoryModel,
  ) {}

  async getCategories(): Promise<Category[]> {
    return this.categoriesRepository.getCategories();
  }

  async getCategory(id: string): Promise<Category> {
    return this.categoriesRepository.getCategory(id);
  }

  async updateCategory(
    id: string,
    category: Omit<Category, "createdAt" | "updatedAt" | "id">,
  ): Promise<Category> {
    return this.categoriesRepository.updateCategory(id, category);
  }

  async createCategory(
    category: Omit<Category, "createdAt" | "updatedAt">,
  ): Promise<Category> {
    return this.categoriesRepository.createCategory(category);
  }

  async updateAllCategories(): Promise<
    Omit<Category, "createdAt" | "updatedAt">[]
  > {
    return this.categoriesRepository.updateAllCategories();
  }

  async getMultipleCategories(ids: string[]): Promise<Category[]> {
    return Promise.all(
      new Array(ids.length).fill(0).map(async (_, index) => {
        return await this.getCategory(ids[index]);
      }),
    );
  }
}
