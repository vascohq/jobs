import { createContext, appRouter } from "./app";

// =======================
// DO NOT MODIFY THIS FILE
// =======================

describe("Level 3", () => {
  test("renders targets for a month", async () => {
    const ctx = await createContext({} as any);
    const caller = appRouter.createCaller(ctx);

    const perMonth = await caller.query("targets.perMonth", {
      month: 6,
      year: 2022,
    });

    expect(perMonth).toMatchObject({
      month: 6,
      year: 2022,
      recurringRevenue: 145000,
      churnRate: 0.01,
      downgradeRate: 0.03,
      upgradeRate: 0.02,
      acquisitionTarget: 5000,
      expansionTarget: 2800,
    });
  });

  test("renders targets for a quarter", async () => {
    const ctx = await createContext({} as any);
    const caller = appRouter.createCaller(ctx);

    const perQuarter = await caller.query("targets.perQuarter", {
      quarter: 2,
      year: 2022,
    });

    expect(perQuarter).toMatchObject({
      quarter: 2,
      year: 2022,
      recurringRevenue: 145000,
      churnRate: 0.028,
      downgradeRate: 0.085,
      upgradeRate: 0.056,
      acquisitionTarget: 25000,
      expansionTarget: 7900,
    });
  });
});
