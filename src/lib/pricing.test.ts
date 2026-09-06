import { describe, expect, it } from "vitest";
import { calculatePrice } from "./pricing";

describe("calculatePrice", () => {
  it("calculates a base price with mandatory delivery", () => {
    const price = calculatePrice({
      service: "wizytowki",
      format: "A5",
      quantity: 100,
      material: "standard",
      finish: "standard",
      color: "bw",
      delivery: "delivery",
    });

    expect(price).toBeGreaterThan(0);
    expect(price).toBe(74);
  });

  it("increases the price for premium material and color printing", () => {
    const price = calculatePrice({
      service: "ulotki",
      format: "A5",
      quantity: 500,
      material: "premium",
      finish: "laminacja",
      color: "color",
      delivery: "delivery",
    });

    expect(price).toBeGreaterThan(200);
    expect(price).toBeGreaterThan(0);
  });

  it("charges delivery fee when selected", () => {
    const price = calculatePrice({
      service: "plakaty",
      format: "A3",
      quantity: 50,
      material: "mat",
      finish: "lakier",
      color: "color",
      delivery: "delivery",
    });

    expect(price).toBeGreaterThan(100);
  });
});
