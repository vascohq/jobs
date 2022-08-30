import * as trpcExpress from "@trpc/server/adapters/express";
import express from "express";

import { appRouter, createContext } from "./app";

export async function main() {
  const app = express();

  app.use((req, _res, next) => {
    console.log("⬅️ ", req.method, req.path, req.body ?? req.query);

    next();
  });

  app.use(
    "/trpc",
    trpcExpress.createExpressMiddleware({
      router: appRouter,
      createContext,
    })
  );
  app.get("/", (_req, res) => res.send("hello"));
  app.listen(2021, () => {
    console.log("listening on port 2021");
  });
}

main();
