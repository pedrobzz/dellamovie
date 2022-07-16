import { PrismaClient } from "@prisma/client";

let prisma: PrismaClient;
export const makePrismaClient = (): PrismaClient => {
  if (prisma) {
    return prisma;
  }
  prisma = new PrismaClient();
  return prisma;
};
