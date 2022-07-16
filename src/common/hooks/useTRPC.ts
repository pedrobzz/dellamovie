import { createReactQueryHooks } from "@trpc/react";
import type { AppRouter } from "../../pages/api/trpc/[trpc]";

let trpc: ReturnType<typeof createReactQueryHooks<AppRouter>>;
export const useTRPC = (): typeof trpc => {
  if (!trpc) {
    trpc = createReactQueryHooks<AppRouter>();
  }
  return trpc;
};
