// the product page to display a single product

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getProductById } from "../data/products";

import { useCart } from "../context/CartContext";

export default function ProductDetails() {
  // get the product ID from the URL
  const { id } = useParams();

  // state to store the selected product
  const [product, setProduct] = useState(null);

  // hook to programmatically navigate between routes
  const navigate = useNavigate();

  const { addToCart, cartItems } = useCart();

  // runs this effect when the ID changes
  useEffect(() => {
    const foundProduct = getProductById(id);

    // if no product is found, go back to the homepage
    if (!foundProduct) {
      navigate("/", { replace: true });
      return;
    }

    // store the found product in state
    setProduct(foundProduct);
  }, [id, navigate]);

  // show the loading message while product is being fetched
  if (!product) {
    return <h1>Loading...</h1>;
  }

  const productInCart = cartItems.find((item) => item.id === product.id);

  const productQuantityLabel = productInCart
    ? `(${productInCart.quantity})`
    : "";

  return (
    <div className="page">
      <div className="container">
        <div className="product-detail">
          {/* product image section */}
          <div className="product-detail-image">
            <img src={product.image} alt={product.name} />
          </div>

          {/* product information section */}
          <div className="product-detail-content">
            <h1 className="product-detail-name">{product.name}</h1>
            <p className="product-detail-price">${product.price}</p>
            <p className="product-detail-description">{product.description}</p>
            <button
              className="btn btn-primary"
              onClick={() => addToCart(product.id)}
            >
              Add to Cart {productQuantityLabel}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
