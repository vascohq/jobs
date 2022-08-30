import { createContext, appRouter } from "./app";

/**
 * ======================
 * DON'T MODIFY THIS FILE
 * ======================
 *
 * You completed this level when the tests below passes.
 */

describe("Level 1", () => {
  test("level 1", async () => {
    const ctx = await createContext({} as any);
    const caller = appRouter.createCaller(ctx);

    const perMonth = await caller.query("stats.perMonth", {
      month: 6,
      year: 2022,
    });

    expect(perMonth).toMatchObject({
      month: 6,
      year: 2022,
      recurringRevenue: 145000.0,
      churnRate: 0.1,
      downgradeRate: 0.1,
      upgradeRate: 0.1,
    });
  });
});
