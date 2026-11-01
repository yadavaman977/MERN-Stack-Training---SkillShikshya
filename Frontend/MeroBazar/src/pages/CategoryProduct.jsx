import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ChevronLeft } from "lucide-react";
import { useData } from "../context/DataContextValue";
import ProductListView from "../components/ProductListView";

const CategoryProduct = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const { data, fetchAllProducts, loading, error } = useData();

  useEffect(() => {
    if (data.length === 0 && !loading) {
      fetchAllProducts();
    }

    window.scrollTo({ top: 0, behavior: "auto" });
  }, [data.length, fetchAllProducts, loading]);

  const categoryProducts = data.filter(
    (product) =>
      product.category?.toLowerCase() === category?.toLowerCase()
  );

  if (loading && data.length === 0) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-sm font-medium text-gray-500">
          Loading products...
        </p>
      </div>
    );
  }

  if (error && data.length === 0) {
    return (
      <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 px-4 text-center">
        <p className="text-gray-600">{error}</p>
        <button
          type="button"
          onClick={fetchAllProducts}
          className="rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white hover:bg-red-700"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <main className="mx-auto my-8 max-w-6xl px-4">
      <button
        type="button"
        onClick={() => navigate("/")}
        className="mb-5 flex items-center gap-1 rounded-md bg-gray-800 px-3 py-2 text-white hover:bg-gray-700"
      >
        <ChevronLeft aria-hidden="true" />
        Back
      </button>

      <h1 className="mb-5 text-2xl font-bold capitalize text-gray-900">
        {category?.replaceAll("-", " ")}
      </h1>

      {categoryProducts.length > 0 ? (
        <div className="space-y-4">
          {categoryProducts.map((product) => (
            <ProductListView key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="rounded-xl border border-gray-200 bg-white px-4 py-12 text-center">
          <h2 className="text-lg font-semibold text-gray-900">
            No products found in this category
          </h2>
          <button
            type="button"
            onClick={() => navigate("/products")}
            className="mt-4 rounded-lg bg-red-600 px-5 py-2.5 font-semibold text-white hover:bg-red-700"
          >
            Browse all products
          </button>
        </div>
      )}
    </main>
  );
};

export default CategoryProduct;
