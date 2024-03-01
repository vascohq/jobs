import { readFileSync } from "node:fs";
import type { Handler } from "vite-plugin-mix";

export const handler: Handler = (req, res, next) => {
  if (req.path.startsWith("/api/")) {
    try {
      const filename = req.path.slice(5);
      const fileContent = readFileSync(`./data/${filename}`, "utf-8");
      res.setHeader("Content-Type", "application/json");
      return res.end(fileContent);
    } catch (err) {
      console.error(err);
      res.statusCode = 500;
      return res.end("Internal server error");
    }
  }
  next();
};
