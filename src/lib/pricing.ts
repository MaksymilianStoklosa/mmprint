import {
  defaultPublishedProductConfigs,
  getPublishedProductConfigBySlug,
  type FormSelections,
  type PricingRule,
  type ProductConfig,
  type ProductSlug,
} from "./products";

export type ServiceType = ProductSlug;

export type PricingOptions = {
  service: ServiceType;
  format: string;
  quantity: number;
  material: string;
  finish: string;
  color: "color" | "bw";
  delivery: "delivery";
};

function isRuleActive(rule: PricingRule, selections: FormSelections) {
  return selections[rule.fieldKey] === rule.whenValue;
}

function toNumber(
  value: string | number | boolean | undefined,
  fallback: number,
) {
  if (typeof value === "number") {
    return Number.isFinite(value) ? value : fallback;
  }

  if (typeof value === "string") {
    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : fallback;
  }

  return fallback;
}

function evaluateConfigPrice(
  config: ProductConfig,
  selections: FormSelections,
) {
  const { pricingDefinition } = config;
  const quantity = Math.max(
    1,
    toNumber(
      selections[pricingDefinition.quantityFieldKey],
      pricingDefinition.quantityBase,
    ),
  );
  const quantityFactor = Math.max(1, quantity / pricingDefinition.quantityBase);

  let multiplier = 1;
  let additive = 0;

  for (const rule of pricingDefinition.rules) {
    if (!isRuleActive(rule, selections)) {
      continue;
    }

    if (rule.type === "multiplier") {
      multiplier *= rule.value;
      continue;
    }

    additive += rule.value;
  }

  const rawPrice =
    pricingDefinition.basePrice * multiplier * quantityFactor + additive;
  return Math.round(rawPrice * 100) / 100;
}

export function calculateConfiguredPrice(
  service: ServiceType,
  selections: FormSelections,
) {
  const config = getPublishedProductConfigBySlug(service);
  if (!config) {
    return 0;
  }

  return evaluateConfigPrice(config, selections);
}

export function calculateConfiguredPriceForConfigs(
  service: string,
  selections: FormSelections,
  configs: ProductConfig[],
) {
  const config = configs.find((entry) => entry.product.slug === service);
  if (!config) {
    return 0;
  }

  return evaluateConfigPrice(config, selections);
}

export function calculatePrice(options: PricingOptions) {
  return calculateConfiguredPriceForConfigs(
    options.service,
    {
      format: options.format,
      quantity: options.quantity,
      material: options.material,
      finish: options.finish,
      color: options.color,
      delivery: options.delivery,
    },
    defaultPublishedProductConfigs,
  );
}
