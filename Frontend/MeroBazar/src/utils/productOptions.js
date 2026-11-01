const SIZE_OPTIONS = {
  apparel: ["XS", "S", "M", "L", "XL", "XXL"],
  footwear: ["36", "37", "38", "39", "40", "41", "42", "43", "44", "45"],
};

const COLORS = [
  { name: "Black", value: "#171717" },
  { name: "White", value: "#ffffff" },
  { name: "Blue", value: "#2563eb" },
  { name: "Red", value: "#dc2626" },
  { name: "Green", value: "#16a34a" },
  { name: "Pink", value: "#ec4899" },
  { name: "Gray", value: "#6b7280" },
];

const APPAREL_CATEGORIES = new Set([
  "mens-shirts",
  "tops",
  "womens-dresses",
  "womens-shirts",
]);

const FOOTWEAR_CATEGORIES = new Set([
  "mens-shoes",
  "womens-shoes",
]);

const COLOR_CATEGORIES = new Set([
  ...APPAREL_CATEGORIES,
  ...FOOTWEAR_CATEGORIES,
  "womens-bags",
]);

export const getProductOptions = (category = "") => {
  const normalizedCategory = category.toLowerCase();
  const sizeCategory = APPAREL_CATEGORIES.has(normalizedCategory)
    ? "apparel"
    : FOOTWEAR_CATEGORIES.has(normalizedCategory)
      ? "footwear"
      : null;

  return {
    sizes: sizeCategory ? SIZE_OPTIONS[sizeCategory] : [],
    colors: COLOR_CATEGORIES.has(normalizedCategory) ? COLORS : [],
  };
};
