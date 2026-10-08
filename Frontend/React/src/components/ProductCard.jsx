function ProductCard({ name, price, category, inStock }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Price: Rs. {price}</p>
      <p>Category: {category}</p>
      <p>{inStock ? "In Stock" : "Out of Stock"}</p>
    </div>
  );
}

export default ProductCard;