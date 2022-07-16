import * as trpc from "@trpc/server";
import * as trpcNext from "@trpc/server/adapters/next";
import {
  categoriesController,
  recomendationsController,
} from "../../../application/controllers";

export const appRouter = trpc
  .router()
  .merge("recomendations.", recomendationsController)
  .merge("categories.", categoriesController);

export type AppRouter = typeof appRouter;

// export API handler
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => null,
});
