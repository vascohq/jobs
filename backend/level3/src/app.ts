import * as trpc from "@trpc/server";
import * as trpcExpress from "@trpc/server/adapters/express";
import { z } from "zod";

// Context
// =======

export const createContext = (ctx: trpcExpress.CreateExpressContextOptions) => {
  return ctx;
};
type Context = trpc.inferAsyncReturnType<typeof createContext>;

function createRouter() {
  return trpc.router<Context>();
}

// Procedures
// ==========

const targetsRouter = createRouter()
  .query("perMonth", {
    input: z.object({ month: z.number(), year: z.number() }),
    resolve: () => {
      return {}; // TODO
    },
  })
  .query("perQuarter", {
    input: z.object({ quarter: z.number(), year: z.number() }),
    resolve: () => {
      return {}; // TODO
    },
  });

// Root Router
// ==========

export const appRouter = createRouter().merge("targets.", targetsRouter);

export type AppRouter = typeof appRouter;
