
import { useNavigate } from "react-router-dom";

const Breadcrums = ({ title }) => {
  const navigate = useNavigate();

  return (
    <div className="mx-auto my-8 max-w-6xl px-4">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-2 text-sm text-gray-500"
      >
        <button
          type="button"
          onClick={() => navigate("/")}
          className="hover:text-red-600"
        >
          Home
        </button>

        <span>/</span>

        <button
          type="button"
          onClick={() => navigate("/products")}
          className="hover:text-red-600"
        >
          Products
        </button>

        <span>/</span>

        <span className="max-w-full break-words font-semibold text-gray-800">
          {title}
        </span>
      </nav>
    </div>
  );
};

export default Breadcrums;
