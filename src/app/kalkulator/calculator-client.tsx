"use client";

import { useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type {
  ProductConfig,
  FormFieldDefinition,
  FormSelections,
} from "@/lib/products";
import { calculateConfiguredPriceForConfigs } from "@/lib/pricing";

type CatalogItem = {
  value: string;
  label: string;
  description: string;
};

type CalculatorClientProps = {
  defaultProduct: string;
  productCatalog: CatalogItem[];
  productConfigs: ProductConfig[];
};

function getFieldDisplayValue(
  field: FormFieldDefinition,
  value: string | number | boolean | undefined,
) {
  if (field.type === "select") {
    const selected = field.options.find(
      (option) => option.value === String(value),
    );
    return selected?.label ?? String(value ?? "-");
  }

  if (field.type === "toggle") {
    return value ? "Tak" : "Nie";
  }

  return String(value ?? "-");
}

function buildInquiryMessage(
  productLabel: string,
  fields: FormFieldDefinition[],
  selections: FormSelections,
  quantityFieldKey: string,
  estimatedPrice: string,
) {
  const lines = [
    "Dzien dobry,",
    "prosze o przygotowanie oferty dla ponizszej konfiguracji:",
    "",
    `Produkt: ${productLabel}`,
  ];

  for (const field of fields) {
    const value = selections[field.key];
    const displayValue = getFieldDisplayValue(field, value);

    if (field.key === quantityFieldKey) {
      lines.push(`${field.label}: ${displayValue} szt.`);
      continue;
    }

    lines.push(`${field.label}: ${displayValue}`);
  }

  lines.push("");
  lines.push(`Szacunkowa cena netto: ${estimatedPrice}`);
  lines.push("");
  lines.push("Prosze o kontakt i potwierdzenie terminu realizacji.");

  return lines.join("\n");
}

function getInitialValuesForProduct(
  config: ProductConfig | undefined,
): FormSelections {
  if (!config) {
    return { quantity: 250 };
  }

  return config.formDefinition.fields.reduce<FormSelections>((acc, field) => {
    if (field.type === "number") {
      acc[field.key] = field.defaultValue ?? field.min ?? 0;
      return acc;
    }

    if (field.type === "toggle") {
      acc[field.key] = field.defaultValue ?? false;
      return acc;
    }

    const firstOption = field.options[0]?.value ?? "";
    acc[field.key] = field.defaultValue ?? firstOption;
    return acc;
  }, {});
}

export default function CalculatorClient({
  defaultProduct,
  productCatalog,
  productConfigs,
}: CalculatorClientProps) {
  const [service, setService] = useState(defaultProduct);
  const [formValues, setFormValues] = useState<FormSelections>(() =>
    getInitialValuesForProduct(
      productConfigs.find((entry) => entry.product.slug === defaultProduct),
    ),
  );

  const config = productConfigs.find((entry) => entry.product.slug === service);
  const quote = calculateConfiguredPriceForConfigs(
    service,
    formValues,
    productConfigs,
  );

  const selectedLabel =
    productCatalog.find((item) => item.value === service)?.label ?? "Produkt";
  const priceLabel = new Intl.NumberFormat("pl-PL", {
    style: "currency",
    currency: "PLN",
    maximumFractionDigits: 2,
  }).format(quote);

  const quantityFieldKey =
    config?.pricingDefinition.quantityFieldKey ?? "quantity";

  const currentQuantity = Number(formValues[quantityFieldKey] ?? 0);
  const quantityTiers = (
    config?.pricingDefinition.quantityTiers?.length
      ? config.pricingDefinition.quantityTiers
      : [100, 250, 500, 1000, 2500, 5000]
  )
    .filter((tier) => Number.isFinite(tier) && tier > 0)
    .map((tier) => Math.round(tier));

  if (currentQuantity > 0 && !quantityTiers.includes(currentQuantity)) {
    quantityTiers.push(currentQuantity);
  }
  quantityTiers.sort((a, b) => a - b);

  const quantityRows = quantityTiers.map((qty) => {
    const tierSelections: FormSelections = {
      ...formValues,
      [quantityFieldKey]: qty,
    };
    const tierTotal = calculateConfiguredPriceForConfigs(
      service,
      tierSelections,
      productConfigs,
    );

    return {
      quantity: qty,
      total: tierTotal,
      unit: qty > 0 ? tierTotal / qty : 0,
      selected: qty === currentQuantity,
    };
  });

  if (!config) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-16 text-center text-muted-foreground">
        Nie znaleziono konfiguracji produktu.
      </div>
    );
  }

  const renderField = (field: FormFieldDefinition) => {
    if (field.type === "select") {
      const currentValue = String(
        formValues[field.key] ?? field.defaultValue ?? "",
      );

      return (
        <div key={field.key} className="space-y-2">
          <Label htmlFor={field.key}>{field.label}</Label>
          <select
            id={field.key}
            value={currentValue}
            onChange={(event) =>
              setFormValues((current) => ({
                ...current,
                [field.key]: event.target.value,
              }))
            }
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {field.options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      );
    }

    if (field.type === "number") {
      const value = Number(
        formValues[field.key] ?? field.defaultValue ?? field.min ?? 0,
      );
      return (
        <div key={field.key} className="space-y-2">
          <Label htmlFor={field.key}>{field.label}</Label>
          <Input
            id={field.key}
            type="number"
            min={field.min}
            max={field.max}
            step={field.step}
            value={value}
            onChange={(event) =>
              setFormValues((current) => ({
                ...current,
                [field.key]: Number(event.target.value) || field.min || 0,
              }))
            }
          />
        </div>
      );
    }

    const checked = Boolean(
      formValues[field.key] ?? field.defaultValue ?? false,
    );
    return (
      <label
        key={field.key}
        className="flex items-center gap-3 rounded-md border border-input p-3 text-sm"
      >
        <input
          id={field.key}
          type="checkbox"
          checked={checked}
          onChange={(event) =>
            setFormValues((current) => ({
              ...current,
              [field.key]: event.target.checked,
            }))
          }
          className="h-4 w-4 accent-foreground"
        />
        <span>{field.label}</span>
      </label>
    );
  };

  const quantityValue = Number(formValues[quantityFieldKey] ?? 0);
  const formatValue = String(formValues.format ?? "-");
  const inquiryMessage = buildInquiryMessage(
    selectedLabel,
    config.formDefinition.fields,
    formValues,
    quantityFieldKey,
    priceLabel,
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="mx-auto max-w-7xl px-6 py-16">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
              Wycen swoje zamowienie
            </h1>
          </div>
          <Link href="/produkty" className={buttonVariants()}>
            Wroc do produktow
          </Link>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr_0.9fr]">
          <Card className="border-border/80 bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Konfiguracja produktu</CardTitle>
              <CardDescription>
                Wybierz parametry produktu, aby zobaczyc wycene.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6 pt-0">
              <div className="space-y-2">
                <Label htmlFor="service">Typ uslugi</Label>
                <select
                  id="service"
                  value={service}
                  onChange={(event) => {
                    const nextService = event.target.value;
                    setService(nextService);
                    const nextConfig = productConfigs.find(
                      (entry) => entry.product.slug === nextService,
                    );
                    setFormValues(getInitialValuesForProduct(nextConfig));
                  }}
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {productCatalog.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-1">
                {config.formDefinition.fields
                  .filter((field) => field.key !== quantityFieldKey)
                  .map((field) => renderField(field))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/80 bg-card">
            <CardHeader>
              <CardTitle className="text-xl">Tabela cen wg nakladu</CardTitle>
              <CardDescription>
                Porownanie ceny calkowitej oraz ceny za sztuke dla roznych
                ilosci.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border/70 text-left text-muted-foreground">
                      <th className="px-4 py-3 font-medium">Naklad</th>
                      <th className="px-4 py-3 font-medium">Cena netto</th>
                      <th className="px-4 py-3 font-medium">
                        Cena netto / szt.
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {quantityRows.map((row) => (
                      <tr
                        key={row.quantity}
                        className={
                          "border-b border-border/40 last:border-b-0 " +
                          (row.selected ? "bg-accent/60" : "")
                        }
                      >
                        <td className="px-4 py-3 font-medium text-foreground">
                          {row.quantity} szt.
                        </td>
                        <td className="px-4 py-3 text-foreground">
                          {new Intl.NumberFormat("pl-PL", {
                            style: "currency",
                            currency: "PLN",
                            maximumFractionDigits: 2,
                          }).format(row.total)}
                        </td>
                        <td className="px-4 py-3 text-muted-foreground">
                          {new Intl.NumberFormat("pl-PL", {
                            style: "currency",
                            currency: "PLN",
                            maximumFractionDigits: 2,
                          }).format(row.unit)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-2xl">Szacunkowa cena</CardTitle>
              <CardDescription>
                Wycene nalezy traktowac jako orientacyjna.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6 p-6 pt-0">
              <div className="space-y-2">
                <Label htmlFor={quantityFieldKey}>Ilosc sztuk</Label>
                <Input
                  id={quantityFieldKey}
                  type="number"
                  min={1}
                  value={quantityValue}
                  onChange={(event) =>
                    setFormValues((current) => ({
                      ...current,
                      [quantityFieldKey]: Math.max(
                        1,
                        Number(event.target.value) || 1,
                      ),
                    }))
                  }
                />
              </div>

              <div className="rounded-2xl bg-background p-5 shadow-sm ring-1 ring-border/60">
                <div className="text-sm text-muted-foreground">
                  Orientacyjna kwota netto
                </div>
                <div className="mt-2 text-4xl font-black tracking-tight">
                  {priceLabel}
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                  dla {formatValue} • {quantityValue} szt. • {selectedLabel}
                </div>
              </div>

              <div className="space-y-3 text-sm text-muted-foreground">
                <div className="flex items-center justify-between">
                  <span>Usluga</span>
                  <span className="font-medium text-foreground">
                    {selectedLabel}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Format</span>
                  <span className="font-medium text-foreground">
                    {formatValue}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <Link
                  href={`/kontakt?message=${encodeURIComponent(inquiryMessage)}#formularz`}
                  className={buttonVariants() + " w-full"}
                >
                  Zapytaj o oferte
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
