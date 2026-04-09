// the home page of the website

import { getProducts } from "../data/products"
import ProductCard from "../components/ProductCard"

export default function Home() {

    // returns data from getProducts
    const products = getProducts()

    return (
        // displays a greeting and a message on the home page
        <div className="page">
            <div className="home-hero"> 
                <h1>Welcome to ShopShop</h1>
                <p className="home-subtitle">
                    Here is hope to you finding our wonderful products
                </p>
            </div>

            {/* Displays the producs on the home page */}
            <div className="container">
                <h2 className="page-title">Products</h2>
                <div className="product-grid">
                    { products.map((product) => (
                        <ProductCard product={ product } key={ product.id }/>
                    ))}
                </div>
            </div>
        </div>
    )
}