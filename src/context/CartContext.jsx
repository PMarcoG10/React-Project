import { createContext, useState, useContext } from "react";
import { getProductById } from "../data/products";

// create a context for the cart
const CartContext = createContext(null)

export default function CartProvider({children}) {
    // cartItems will store objects like : { id: 2, quantity: 4 }
    const [ cartItems, setCartItems ] = useState([])

    // add a product to cart
    function addToCart(productId) {
        // checks if an item exists in the cart
        const existing = cartItems.find((item) => item.id === productId)
        
        if (existing) {
            // if an item exists increase the quantity by 1
            const currentQuantity = existing.quantity

            const updatedCartItems = cartItems.map((item) => 
                item.id === productId 
                    ? { id: productId, quantity: currentQuantity + 1} 
                    : item)

            setCartItems(updatedCartItems)
        } else {
            // if an item does not exist add it with a quantity 1
            setCartItems([...cartItems, { id: productId, quantity: 1}])
        }
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
        setCartItems(cartItems.filter((item) => item.id !== productId))
    }

    // update the quantity of a specific product
    function updateQuantity(productId, quantity) {
        if (quantity <= 0) {
            removeFromCart(productId)
            return
        }

        // otherwise update the quantity
        setCartItems(
            cartItems.map((item) => 
                item.id === productId ? { ...item, quantity} : item
            )
        )
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