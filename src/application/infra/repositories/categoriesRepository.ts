import { Category, PrismaClient } from "@prisma/client";
import MovieDB from "node-themoviedb";
import { CategoriesRepositoryModel } from "../../../domain/repositories";

export class PrismaCategoriesRepository implements CategoriesRepositoryModel {
  constructor(
    private readonly prismaClient: PrismaClient,
    private readonly movieDB: MovieDB,
  ) {}
  getCategory(id: string): Promise<Category> {
    return this.prismaClient.category.findFirst({
      where: { id },
    });
  }

  getCategories(): Promise<Category[]> {
    return this.prismaClient.category.findMany();
  }

  updateCategory(
    id: string,
    category: Omit<Category, "createdAt" | "updatedAt">,
  ): Promise<Category> {
    const { name } = category;
    return this.prismaClient.category.update({
      where: { id },
      data: { name },
    });
  }

  createCategory(
    category: Omit<Category, "createdAt" | "updatedAt">,
  ): Promise<Category> {
    return this.prismaClient.category.create({
      data: { ...category },
    });
  }

  async updateAllCategories(): Promise<
    Omit<Category, "createdAt" | "updatedAt">[]
  > {
    const { data } = await this.movieDB.genre.getMovieList();
    const { genres: allCategories } = data;
    const categories = allCategories.map(category => ({
      ...category,
      id: category.id.toString(),
    }));
    await this.prismaClient.category.deleteMany({});
    await this.prismaClient.category.createMany({
      data: categories,
      skipDuplicates: true,
    });
    return categories;
  }
}
