import { getPublishedProductConfigs } from "@/lib/products";
import { toProductCatalog } from "@/lib/products";
import CalculatorClient from "./calculator-client";

export default function CalculatorPage() {
  const configs = getPublishedProductConfigs();
  const productCatalog = toProductCatalog(configs);
  const defaultProduct = productCatalog[0]?.value ?? "wizytowki";

  return (
    <CalculatorClient
      defaultProduct={defaultProduct}
      productCatalog={productCatalog}
      productConfigs={configs}
    />
  );
}
