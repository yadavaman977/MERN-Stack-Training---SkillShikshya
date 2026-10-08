import { useState, useEffect } from "react";

const App = () => {

  // Store products
  const [products, setProducts] = useState([]);

  // Get products when page loads
  useEffect(() => {

    const getProducts = async () => {

      // Get data from API
      const response = await fetch(
        "https://fakestoreapi.com/products"
      );

      // Convert response to JSON
      const data = await response.json();

      // Store products
      setProducts(data);
    };

    getProducts();

  }, []);

  return (
    <div>

      <h1>Products</h1>

      <table  className="border border-black">

        <thead>
          <tr>
            <th className="border border-black">ID</th>
            <th className="border border-black">Title</th>
            <th className="border border-black">Price</th>
            <th className="border border-black">Category</th>
          </tr>
        </thead>

        <tbody>

          {products.map((product) => (

            <tr key={product.id}>

              <td className="border border-black">{product.id}</td>

              <td className="border border-black">{product.title}</td>

              <td className="border border-black">${product.price}</td>

              <td className="border border-black">{product.category}</td>
               <td className="border border-black"  >
          <img
            src={product.image}
            alt={product.title}
            className="w-20 h-20 object-contain"
          />
        </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>
  );
};

export default App;