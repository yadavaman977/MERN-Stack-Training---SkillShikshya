
import {
  useCallback,
  useRef,
  useState,
} from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { DataContext } from "./DataContextValue";

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const productRequest = useRef(null);

  const fetchAllProducts = useCallback(() => {
    if (productRequest.current) return productRequest.current;

    const request = Promise.resolve().then(async () => {
      try {
        setLoading(true);
        setError("");

        const response = await axios.get(
          "https://dummyjson.com/products?limit=194"
        );

        setData(response.data.products || []);
      } catch (err) {
        console.error("Failed to fetch products:", err);
        setError("Unable to load products. Please try again.");
        toast.error("Unable to load products. Please try again.");
      } finally {
        setLoading(false);
        productRequest.current = null;
      }
    });

    productRequest.current = request;
    return request;
  }, []);

  const categoryOnlyData = [
    ...new Set(data.map((product) => product.category).filter(Boolean)),
  ];

  const brandOnlyData = [
    ...new Set(data.map((product) => product.brand).filter(Boolean)),
  ];

  const getBrandsByCategories = (selectedCategories) => {
    const filteredProducts = selectedCategories.includes("All")
      ? data
      : data.filter((product) =>
          selectedCategories.includes(product.category)
        );

    return [
      "All",
      ...new Set(
        filteredProducts
          .map((product) => product.brand)
          .filter((brand) => typeof brand === "string" && brand.trim())
      ),
    ];
  };

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        loading,
        error,
        fetchAllProducts,
        categoryOnlyData,
        brandOnlyData,
        getBrandsByCategories,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
