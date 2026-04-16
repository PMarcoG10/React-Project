// the checkout page of the website
import { useCart } from "../context/CartContext"


export default function CheckOut() {
    const { 
        getCartItemsWithProducts,
        updateQuantity,
        removeFromCart,
        getCartTotal,
        clearCart, } = useCart()

    // get cart items with product info (name, price, image etc)
    const cartItems = getCartItemsWithProducts()

    // calculate total price of all items
    const total = getCartTotal()

    // define tax rate
    const TAX_RATE = 0.0825

    // calculte tax amount
    const tax = total * TAX_RATE

    // final total
    const final = total + tax

    // handle placing the order
    function placeOrder() {
        alert("Successful Order!!!")
        clearCart()
    }

    return (
        <div className="page">
            <div className="container">
                {/* page title */}
                <h1 className="page-title">Checkout</h1>
                <div className="checkout-container">
                    {/* LEFT SIDE: Order Summary */}
                    <div className="checkout-items">
                        <h2 className="checkout-section-title">
                            Order Summary
                        </h2>

                        {/* loop through cart items */}
                        { cartItems.map((item) => (
                            <div className="checkout-item" key={item.id}>
                                <img
                                    src={item.product.image}
                                    alt={item.product.name}
                                    className="checkout-item-image"
                                />
                                {/* product details */}
                                <div className="checkout-item-details">
                                    <h3 className="checkout-item-name">
                                        {item.product.name}
                                    </h3>
                                    <p className="checkout-item-price">
                                        ${item.product.price} each
                                    </p>
                                </div>

                                {/* quantity controls and actions */}
                                <div className="checkout-item-controls">
                                    <div className="quantity-controls">
                                        {/* decrease quantity */}
                                        <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity - 1)}>
                                            -
                                        </button>
                                        <span className="quantity-value">{item.quantity}</span>
                                        {/* increase quantity */}
                                        <button className="quantity-btn" onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                                            +
                                        </button>
                                    </div>

                                    {/* total price for the items */}
                                    <p className="checkout-item-total">
                                        ${(item.product.price * item.quantity).toFixed(2)}
                                    </p>

                                    {/* remove item from cart */}
                                    <button className="btn btn-secondary btn-small" onClick={() => removeFromCart(item.id)}>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* RIGHT SIDE: summary section */}
                    <div className="checkout-summary">
                        <h2 className="checkout-section-title">
                            Total
                        </h2>

                        {/* subtotal */}
                        <div className="checkout-total">
                            <p className="checkout-total-label">
                                Subtotal:
                            </p>
                            <p className="checkout-total-value">
                                ${total.toFixed(2)}
                            </p>
                        </div>

                        {/* tax */}
                        <div className="checkout-total">
                            <p className="checkout-total-label">
                                tax({(TAX_RATE * 100).toFixed(2)}%):
                            </p>
                            <p className="checkout-total-value">
                                ${tax.toFixed(2)}
                            </p>
                        </div>

                        {/* final total */}
                        <div className="checkout-total">
                            <p className="checkout-total-label">
                                Total:
                            </p>
                            <p className="checkout-total-value">
                                ${final.toFixed(2)}
                            </p>
                        </div>

                        {/* place order button */}
                        <button className="btn btn-primary btn-large btn-block" onClick={placeOrder}>
                            Place Order
                        </button>
                    </div>
                </div>            
            </div>
        </div>
    )
}