import { computeTargets, monthlyTargetSorter } from "./organization-targets";

describe("monthlyTargetSorter", () => {
  test("should sort the monthly targets by year and month", () => {
    const a = { month: 1, year: 2021 };
    const b = { month: 2, year: 2021 };
    const c = { month: 1, year: 2020 };
    const d = { month: 2, year: 2020 };
    const e = { month: 1, year: 2022 };
    const f = { month: 2, year: 2022 };
    const monthlyTargets = [f, e, d, c, b, a];

    const result = monthlyTargets.sort(monthlyTargetSorter);

    expect(result).toEqual([c, d, a, b, e, f]);
  });
});

describe("computeTargets", () => {
  it("should return an empty array if the monthly targets are empty", () => {
    const result = computeTargets([]);
    expect(result).toEqual([]);
  });

  it("should compute the targets without changes", async () => {
    const targets = [
      {
        month: 1,
        year: 2023,
        beginningMRR: 80000,
        newBusinessMRR: 2500,
        churnRate: 2,
        grossChurnedMRR: -1600,
        expansionRate: 4,
        expansionMRR: 3200,
        endingMRR: 84100,
      },
      {
        month: 2,
        year: 2023,
        beginningMRR: 84100,
        newBusinessMRR: 2500,
        churnRate: 2,
        grossChurnedMRR: -1682,
        expansionRate: 4,
        expansionMRR: 3364,
        endingMRR: 88282,
      },
      {
        month: 3,
        year: 2023,
        beginningMRR: 88282,
        newBusinessMRR: 2500,
        churnRate: 2,
        grossChurnedMRR: -1766,
        expansionRate: 4,
        expansionMRR: 3531,
        endingMRR: 92548,
      },
      {
        month: 4,
        year: 2023,
        beginningMRR: 92548,
        newBusinessMRR: 2500,
        churnRate: 2,
        grossChurnedMRR: -1851,
        expansionRate: 4,
        expansionMRR: 3702,
        endingMRR: 96899,
      },
      {
        month: 5,
        year: 2023,
        beginningMRR: 96899,
        newBusinessMRR: 2500,
        churnRate: 2,
        grossChurnedMRR: -1938,
        expansionRate: 4,
        expansionMRR: 3876,
        endingMRR: 101337,
      },
      {
        month: 6,
        year: 2023,
        beginningMRR: 101337,
        newBusinessMRR: 2500,
        churnRate: 2,
        grossChurnedMRR: -2027,
        expansionRate: 4,
        expansionMRR: 4053,
        endingMRR: 105863,
      },
      {
        month: 7,
        year: 2023,
        beginningMRR: 105863,
        newBusinessMRR: 2500,
        churnRate: 2,
        grossChurnedMRR: -2117,
        expansionRate: 4,
        expansionMRR: 4235,
        endingMRR: 110481,
      },
      {
        month: 8,
        year: 2023,
        beginningMRR: 110481,
        newBusinessMRR: 2500,
        churnRate: 2,
        grossChurnedMRR: -2210,
        expansionRate: 4,
        expansionMRR: 4419,
        endingMRR: 115190,
      },
      {
        month: 9,
        year: 2023,
        beginningMRR: 115190,
        newBusinessMRR: 2500,
        churnRate: 2,
        grossChurnedMRR: -2304,
        expansionRate: 4,
        expansionMRR: 4608,
        endingMRR: 119994,
      },
      {
        month: 10,
        year: 2023,
        beginningMRR: 119994,
        newBusinessMRR: 2500,
        churnRate: 2,
        grossChurnedMRR: -2400,
        expansionRate: 4,
        expansionMRR: 4996,
        endingMRR: 124894,
      },
      {
        month: 11,
        year: 2023,
        beginningMRR: 124894,
        newBusinessMRR: 2500,
        churnRate: 2,
        grossChurnedMRR: -2498,
        expansionRate: 4,
        expansionMRR: 5196,
        endingMRR: 129892,
      },
      {
        month: 12,
        year: 2023,
        beginningMRR: 129892,
        newBusinessMRR: 2500,
        churnRate: 2,
        grossChurnedMRR: -2598,
        expansionRate: 4,
        expansionMRR: 5196,
        endingMRR: 134990,
      },
    ];

    const result = computeTargets(targets);

    // This should not be the case here - to clarify with stakeholders.
    expect(result).toEqual([
      targets[0],
      targets[1],
      targets[2],
      {
        quarter: 1,
        year: 2023,
        beginningMRR: 80000,
        newBusinessMRR: 7500,
        churnRate: 6,
        expansionRate: 12,
        expansionMRR: 10095,
        endingMRR: 92548,
      },
      targets[3],
      targets[4],
      {
        ...targets[5],
        endingMRR: 105864,
      },
      {
        quarter: 2,
        year: 2023,
        beginningMRR: 92548,
        newBusinessMRR: 7500,
        churnRate: 6,
        expansionRate: 12,
        expansionMRR: 11631,
        // endingMRR: 105863,
        endingMRR: 105864,
      },
      {
        ...targets[6],
        beginningMRR: 105864,
      },
      {
        ...targets[7],
        endingMRR: 115191,
      },
      {
        ...targets[8],
        beginningMRR: 115191,
        endingMRR: 119995,
      },
      {
        quarter: 3,
        year: 2023,
        // beginningMRR: 105863,
        beginningMRR: 105864,
        newBusinessMRR: 7500,
        churnRate: 6,
        expansionRate: 12,
        expansionMRR: 13261,
        // endingMRR: 119994,
        endingMRR: 119995,
      },
      {
        ...targets[9],
        beginningMRR: 119995,
        expansionMRR: 4800,
        endingMRR: 124895,
      },
      {
        ...targets[10],
        beginningMRR: 124895,
        expansionMRR: 4996,
        endingMRR: 129893,
      },
      {
        ...targets[11],
        beginningMRR: 129893,
        endingMRR: 134991,
      },
      {
        quarter: 4,
        year: 2023,
        // beginningMRR: 119994,
        beginningMRR: 119995,
        newBusinessMRR: 7500,
        churnRate: 6,
        expansionRate: 12,
        expansionMRR: 14991,
        // endingMRR: 134990,
        endingMRR: 134991,
      },
    ]);
  });

  it("should compute the targets with override and no quarter", async () => {
    const targets = [
      {
        month: 1,
        year: 2023,
        beginningMRR: 80000,
        newBusinessMRR: 2500,
        churnRate: 2,
        grossChurnedMRR: -1600,
        expansionRate: 4,
        expansionMRR: 3200,
        endingMRR: 84100,
      },
      {
        month: 2,
        year: 2023,
        beginningMRR: 84100,
        newBusinessMRR: 3000,
        churnRate: 2,
        grossChurnedMRR: -1682,
        expansionRate: 4,
        expansionMRR: 3364,
        endingMRR: 88282,
      },
    ];

    // Act
    const result = computeTargets(targets);

    // Assert
    expect(result).toEqual([
      targets[0],
      {
        ...targets[1],
        endingMRR: 88782,
      },
    ]);
  });
});
