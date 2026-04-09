// the home page of the website

import { getProducts } from "../data/products"

export default function Home() {

    // returns data from getProducts
    const products = getProducts()

    return (
        // displays a greeting and a message on the home screen
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
                <div className="products-grid">
                    { products.map((product) => (
                        <div className="product-card" key={ product.id} >
                            <img src={product.image} className="product-card-image" />
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}