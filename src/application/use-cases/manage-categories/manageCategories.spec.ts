import { Category } from "@prisma/client";
import { describe, it, expect, beforeAll } from "@jest/globals";
import { config } from "dotenv";
import { CategoriesRepositoryModel } from "../../../domain/repositories/categoriesRepository";
import { ManageCategories } from "./manageCategories";

class CategoriesRepositoryMock implements CategoriesRepositoryModel {
  categories: Category[] = [];
  constructor() {
    const categoryMap = {
      "10402": "Música",
      "10749": "Romance",
      "10751": "Família",
      "10752": "Guerra",
      "10770": "Cinema TV",
      "12": "Aventura",
      "14": "Fantasia",
      "16": "Animação",
      "18": "Drama",
      "27": "Terror",
      "28": "Ação",
      "35": "Comédia",
      "36": "História",
      "37": "Faroeste",
      "53": "Thriller",
      "80": "Crime",
      "878": "Ficção científica",
      "9648": "Mistério",
      "99": "Documentário",
    } as const;

    this.categories = Object.keys(categoryMap).map(key => ({
      id: key,
      name: categoryMap[key],
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
  }

  async getCategory(id: string): Promise<Category> {
    return Promise.resolve(
      this.categories.find(category => category.id === id),
    );
  }
  async getCategories(): Promise<Category[]> {
    return Promise.resolve(this.categories);
  }
  async updateCategory(
    id: string,
    category: Omit<Category, "createdAt" | "updatedAt">,
  ): Promise<Category> {
    this.categories = this.categories.map(currentCategory =>
      currentCategory.id === id
        ? { ...currentCategory, ...category }
        : currentCategory,
    );
    return Promise.resolve(
      this.categories.find(category => category.id === id),
    );
  }
  async createCategory(
    category: Omit<Category, "createdAt" | "updatedAt">,
  ): Promise<Category> {
    this.categories.push({
      ...category,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    return Promise.resolve(this.categories.find(c => c.id === category.id));
  }
  async updateAllCategories(): Promise<
    Omit<Category, "createdAt" | "updatedAt">[]
  > {
    const categoryMap = {
      "10402": "Música",
      "10749": "Romance",
      "10751": "Família",
      "10752": "Guerra",
      "10770": "Cinema TV",
      "12": "Aventura",
      "14": "Fantasia",
      "16": "Animação",
      "18": "Drama",
      "27": "Terror",
      "28": "Ação",
      "35": "Comédia",
      "36": "História",
      "37": "Faroeste",
      "53": "Thriller",
      "80": "Crime",
      "878": "Ficção científica",
      "9648": "Mistério",
      "99": "Documentário",
    } as const;
    this.categories = Object.keys(categoryMap).map(key => ({
      id: key,
      name: categoryMap[key],
      createdAt: new Date(),
      updatedAt: new Date(),
    }));
    return this.categories;
  }
}

const makeSUT = () => {
  const categoriesRepository = new CategoriesRepositoryMock();
  const sut = new ManageCategories(categoriesRepository);
  return { sut, categoriesRepository };
};

describe("ManageCategories", () => {
  beforeAll(() => {
    config();
  });

  it("should be defined", () => {
    const { sut } = makeSUT();
    expect(sut).toBeDefined();
  });

  it("Should be able to updateAllCategories", async () => {
    const { sut } = makeSUT();
    const categories = await sut.updateAllCategories();
    expect(categories).toBeDefined();
    expect(categories.length).toBe(19);
  });

  it("Should be able to getCategories all categories", async () => {
    const { sut } = makeSUT();
    const categories = await sut.getCategories();
    expect(categories).toBeDefined();
    expect(categories.length).toBe(19);
  });

  it("Should be able to getCategory by id", async () => {
    const { sut } = makeSUT();
    const category = await sut.getCategory("10402");
    expect(category).toBeDefined();
    expect(category.id).toBe("10402");
  });

  it("Should be able to updateCategory", async () => {
    const { sut } = makeSUT();
    const category = await sut.updateCategory("10402", {
      name: "Música",
    });
    expect(category).toBeDefined();
    expect(category.name).toBe("Música");
  });

  it("Should be able to createCategory", async () => {
    const { sut } = makeSUT();
    const category = await sut.createCategory({
      id: "837263",
      name: "Categoria Teste",
    });
    expect(category).toBeDefined();
    expect(category.id).toBe("837263");
    expect(category.name).toBe("Categoria Teste");
  });

  it("Should be able to get multiple categories", async () => {
    const { sut } = makeSUT();
    const ids = ["10402", "10749"];
    const categories = await sut.getMultipleCategories(ids);
    expect(categories).toBeDefined();
    expect(categories.length).toBe(2);
    expect(categories.every(c => ids.includes(c.id))).toBe(true);
  });
});
