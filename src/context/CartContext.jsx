import { createContext, useState, useContext } from "react";
import { getProductById } from "../data/products";

// create a context for the cart
const CartContext = createContext(null)

export default function CartProvider({children}) {
    // cartItems will store objects like : { id: 2, quantity: 4 }
    const [ cartItems, setCartItems ] = useState([])

    // add a product to cart
    function addToCart(productId) {
        setCartItems((prevItems) => {
            // checks if an item exists in the cart
            const existing = prevItems.find((item) => item.id === productId)

            if (existing) {
                // if an item exists increase the quantity by 1
                return prevItems.map((item) =>
                item.id === productId
                        ? { ...item, quantity: item.quantity + 1 }
                    : item
            ) }
            // if an item does not exist add it with a quantity 1
            return [...prevItems, { id: productId, quantity: 1 }]
        })
    }

    // return cart items with full product data
    function getCartItemsWithProducts() {
        return cartItems.map(item => ({
            ...item,
            product: getProductById(item.id)
        })).filter(item => item.product)
    }

    // remove product completely from the cart
    function removeFromCart(productId) {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== productId))
    }

    // update the quantity of a specific product
    function updateQuantity(productId, quantity) {
        setCartItems((prevItems) => {
            if (quantity <= 0) {
                return prevItems.filter((item) => item.id !== productId)
            }

            // otherwise update the quantity
            return prevItems.map((item) =>
                item.id === productId ? { ...item, quantity } : item
            )
        })
    }

    // calculate the total price of all items in the cart
    function getCartTotal() {
        const total = cartItems.reduce((total, item) =>{
            const product = getProductById(item.id)

            return total + (product ? product.price * item.quantity : 0)
        } , 0)

        return total
    }

    // empty the entire cart 
    function clearCart() {
        setCartItems([])
    }

    return (
        <CartContext.Provider 
        value={ {
            cartItems,
            addToCart,
            getCartItemsWithProducts,
            removeFromCart,
            updateQuantity,
            getCartTotal,
            clearCart,
            } }>
            { children }
        </CartContext.Provider>
    )
}

// custom hook to access the cart context easily
export function useCart() {
    const context = useContext(CartContext)

    return context
}