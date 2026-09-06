export type FormValue = string | number | boolean;
export type FormSelections = Record<string, FormValue>;

export type SelectOption = {
  value: string;
  label: string;
};

type BaseField = {
  key: string;
  label: string;
  required?: boolean;
  helpText?: string;
};

export type SelectField = BaseField & {
  type: "select";
  options: SelectOption[];
  defaultValue?: string;
};

export type NumberField = BaseField & {
  type: "number";
  min?: number;
  max?: number;
  step?: number;
  defaultValue?: number;
};

export type ToggleField = BaseField & {
  type: "toggle";
  defaultValue?: boolean;
};

export type FormFieldDefinition = SelectField | NumberField | ToggleField;

export type PricingRule = {
  id: string;
  type: "multiplier" | "additive";
  fieldKey: string;
  whenValue: string | number | boolean;
  value: number;
};

export type PricingDefinition = {
  basePrice: number;
  quantityFieldKey: string;
  quantityBase: number;
  quantityTiers?: number[];
  rules: PricingRule[];
};

export type ProductConfig = {
  product: {
    slug: string;
    label: string;
    description: string;
    fromPrice: number;
  };
  formDefinition: {
    fields: FormFieldDefinition[];
  };
  pricingDefinition: PricingDefinition;
};

export const productSlugs = [
  "wizytowki",
  "ulotki",
  "plakaty",
  "katalogi",
  "broszury",
  "bannery",
  "kalendarze",
  "notesy",
  "ksiazki-i-albumy",
  "mapy-i-przewodniki",
  "teczki-ofertowe",
  "papier-firmowy",
  "arkusze-plano",
  "wobblery",
  "naklejki",
] as const;

export type ProductSlug = (typeof productSlugs)[number];

const defaultFormatMultipliers: Record<string, number> = {
  A5: 1,
  A4: 1.3,
  DL: 0.9,
  B2: 1.8,
  A3: 1.7,
};

const defaultMaterialMultipliers: Record<string, number> = {
  standard: 1,
  premium: 1.35,
  mat: 1.5,
  gloss: 1.45,
};

const defaultFinishMultipliers: Record<string, number> = {
  standard: 1,
  laminacja: 1.2,
  lakier: 1.25,
  ciecie: 1.15,
};

const defaultColorMultipliers: Record<string, number> = {
  color: 1.35,
  bw: 1,
};

const defaultQuantityTiers = [100, 250, 500, 1000, 2500, 5000];

const commonFields: FormFieldDefinition[] = [
  {
    key: "format",
    type: "select",
    label: "Format",
    required: true,
    defaultValue: "DL",
    options: [
      { value: "DL", label: "DL" },
      { value: "A5", label: "A5" },
      { value: "A4", label: "A4" },
      { value: "A3", label: "A3" },
      { value: "B2", label: "B2" },
    ],
  },
  {
    key: "quantity",
    type: "number",
    label: "Naklad",
    required: true,
    defaultValue: 250,
    min: 10,
    step: 10,
  },
  {
    key: "material",
    type: "select",
    label: "Papier / material",
    required: true,
    defaultValue: "standard",
    options: [
      { value: "standard", label: "Standard" },
      { value: "premium", label: "Premium" },
      { value: "mat", label: "Mat" },
      { value: "gloss", label: "Gloss" },
    ],
  },
  {
    key: "finish",
    type: "select",
    label: "Wykonczenie",
    required: true,
    defaultValue: "standard",
    options: [
      { value: "standard", label: "Standard" },
      { value: "laminacja", label: "Laminacja" },
      { value: "lakier", label: "Lakier" },
      { value: "ciecie", label: "Ciecie" },
    ],
  },
  {
    key: "color",
    type: "select",
    label: "Kolor druku",
    required: true,
    defaultValue: "bw",
    options: [
      { value: "bw", label: "Czarno-bialy" },
      { value: "color", label: "Kolor" },
    ],
  },
  {
    key: "delivery",
    type: "select",
    label: "Dostawa",
    required: true,
    defaultValue: "delivery",
    options: [{ value: "delivery", label: "Dostawa" }],
  },
];

function mapToMultiplierRules(
  fieldKey: string,
  entries: Record<string, number>,
): PricingRule[] {
  return Object.entries(entries).map(([value, multiplier]) => ({
    id: `${fieldKey}:${value}`,
    type: "multiplier",
    fieldKey,
    whenValue: value,
    value: multiplier,
  }));
}

function commonPricingRules(): PricingRule[] {
  return [
    ...mapToMultiplierRules("format", defaultFormatMultipliers),
    ...mapToMultiplierRules("material", defaultMaterialMultipliers),
    ...mapToMultiplierRules("finish", defaultFinishMultipliers),
    ...mapToMultiplierRules("color", defaultColorMultipliers),
    {
      id: "delivery:delivery",
      type: "additive",
      fieldKey: "delivery",
      whenValue: "delivery",
      value: 35,
    },
  ];
}

type ProductSeed = {
  slug: ProductSlug;
  label: string;
  description: string;
  fromPrice: number;
  basePrice: number;
  fields?: FormFieldDefinition[];
  extraRules?: PricingRule[];
};

const productSeeds: ProductSeed[] = [
  {
    slug: "wizytowki",
    label: "Wizytowki",
    description: "Profesjonalna identyfikacja marki na malym formacie.",
    fromPrice: 39,
    basePrice: 39,
  },
  {
    slug: "ulotki",
    label: "Ulotki",
    description: "Szybki i skuteczny nosnik informacji reklamowej.",
    fromPrice: 55,
    basePrice: 55,
  },
  {
    slug: "plakaty",
    label: "Plakaty",
    description: "Wysokiej jakosci materialy do kampanii i eventow.",
    fromPrice: 89,
    basePrice: 89,
    fields: commonFields.map((field) => {
      if (field.key === "format" && field.type === "select") {
        return {
          ...field,
          options: [
            { value: "A3", label: "A3" },
            { value: "A4", label: "A4" },
            { value: "B2", label: "B2" },
          ],
          defaultValue: "A3",
        } satisfies FormFieldDefinition;
      }
      return field;
    }),
  },
  {
    slug: "katalogi",
    label: "Katalogi",
    description:
      "Kompletne prezentacje produktow i uslug w czytelnym formacie.",
    fromPrice: 199,
    basePrice: 199,
  },
  {
    slug: "broszury",
    label: "Broszury",
    description: "Prezentacja ofert i uslug w porecznym, eleganckim formacie.",
    fromPrice: 99,
    basePrice: 99,
  },
  {
    slug: "bannery",
    label: "Bannery",
    description:
      "Duze materialy reklamowe do przestrzeni sprzedazowych i eventow.",
    fromPrice: 180,
    basePrice: 180,
    fields: [
      ...commonFields,
      {
        key: "montaz",
        type: "toggle",
        label: "Mocowanie i montaz",
        defaultValue: false,
      },
    ],
    extraRules: [
      {
        id: "montaz:true",
        type: "additive",
        fieldKey: "montaz",
        whenValue: true,
        value: 60,
      },
    ],
  },
  {
    slug: "kalendarze",
    label: "Kalendarze",
    description: "Praktyczne produkty firmowe z dlugim czasem ekspozycji.",
    fromPrice: 120,
    basePrice: 120,
  },
  {
    slug: "notesy",
    label: "Notesy",
    description: "Funkcjonalne i estetyczne akcesoria firmowe i reklamowe.",
    fromPrice: 75,
    basePrice: 75,
  },
  {
    slug: "ksiazki-i-albumy",
    label: "Ksiazki i albumy",
    description: "Wysokiej jakosci publikacje i wydawnictwa firmowe.",
    fromPrice: 220,
    basePrice: 220,
  },
  {
    slug: "mapy-i-przewodniki",
    label: "Mapy i przewodniki",
    description: "Czytelne materialy informacyjne dla klientow i gosci.",
    fromPrice: 140,
    basePrice: 140,
  },
  {
    slug: "teczki-ofertowe",
    label: "Teczki ofertowe",
    description: "Nowoczesna prezentacja oferty i materialow firmowych.",
    fromPrice: 70,
    basePrice: 70,
    fields: [
      ...commonFields,
      {
        key: "kieszen",
        type: "select",
        label: "Typ kieszeni",
        required: true,
        defaultValue: "single",
        options: [
          { value: "single", label: "Jedna kieszen" },
          { value: "double", label: "Dwie kieszenie" },
        ],
      },
    ],
    extraRules: [
      {
        id: "kieszen:double",
        type: "multiplier",
        fieldKey: "kieszen",
        whenValue: "double",
        value: 1.15,
      },
    ],
  },
  {
    slug: "papier-firmowy",
    label: "Papier firmowy",
    description: "Spersonalizowane papiery do korespondencji i dokumentacji.",
    fromPrice: 60,
    basePrice: 60,
  },
  {
    slug: "arkusze-plano",
    label: "Arkusze plano",
    description: "Precyzyjne nosniki do projektow, rysunkow i dokumentacji.",
    fromPrice: 80,
    basePrice: 80,
  },
  {
    slug: "wobblery",
    label: "Wobblery",
    description: "Materialy do ekspozycji i prezentacji produktu.",
    fromPrice: 110,
    basePrice: 110,
  },
  {
    slug: "naklejki",
    label: "Naklejki",
    description: "Elastyczne etykiety i oznaczenia do roznych zastosowan.",
    fromPrice: 45,
    basePrice: 45,
    fields: [
      ...commonFields,
      {
        key: "ksztalt",
        type: "select",
        label: "Ksztalt",
        required: true,
        defaultValue: "prostokat",
        options: [
          { value: "prostokat", label: "Prostokat" },
          { value: "okragly", label: "Okragly" },
          { value: "niestandardowy", label: "Niestandardowy" },
        ],
      },
    ],
    extraRules: [
      {
        id: "ksztalt:okragly",
        type: "multiplier",
        fieldKey: "ksztalt",
        whenValue: "okragly",
        value: 1.08,
      },
      {
        id: "ksztalt:niestandardowy",
        type: "multiplier",
        fieldKey: "ksztalt",
        whenValue: "niestandardowy",
        value: 1.2,
      },
    ],
  },
];

export const defaultPublishedProductConfigs: ProductConfig[] = productSeeds.map(
  (seed) => ({
    product: {
      slug: seed.slug,
      label: seed.label,
      description: seed.description,
      fromPrice: seed.fromPrice,
    },
    formDefinition: {
      fields: seed.fields ?? commonFields,
    },
    pricingDefinition: {
      basePrice: seed.basePrice,
      quantityFieldKey: "quantity",
      quantityBase: 100,
      quantityTiers: defaultQuantityTiers,
      rules: [...commonPricingRules(), ...(seed.extraRules ?? [])],
    },
  }),
);

export function getPublishedProductConfigs() {
  return defaultPublishedProductConfigs;
}

export function getPublishedProductConfigBySlug(slug: string) {
  return defaultPublishedProductConfigs.find(
    (entry) => entry.product.slug === slug,
  );
}

export function toProductCatalog(configs: ProductConfig[]) {
  return configs.map((entry) => ({
    value: entry.product.slug as ProductSlug,
    label: entry.product.label,
    description: entry.product.description,
  }));
}

export type ProductValue = ProductSlug;
