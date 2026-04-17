// product card component - displays individual product information

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart, cartItems } = useCart();
  const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";
  return (
    <div className="product-card" key={product.id}>
      {/* product image */}
      <img
        src={product.image}
        alt={product.name}
        className="product-card-image"
      />

      {/* content section for the name, price, and buttons */}
      <div className="product-card-content">
        <h3 className="product-card-name">{product.name}</h3>
        <p className="product-card-price">${product.price}</p>

        {/* actions buttons for details and adding to cart */}
        <div>
          <Link className="btn btn-secondary" to={`/products/${product.id}`}>
            View Details
          </Link>
          <button
            className="btn btn-primary"
            onClick={() => addToCart(product.id)}
          >
            Add to cart {productQuantityLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
