// fake backend to display products for the website

// a list of products 
const products = [
    {
        id: 1,
        name: "wireless mouse",
        price: 179.99,
        image: "https://m.media-amazon.com/images/I/51+51Ur4jzL._AC_UF894,1000_QL80_.jpg",
        description: 
            "Premium wireless mouse with new innovations in ultra low latency technology",
    },
    {
        id: 2,
        name: "wireless headset",
        price: 349.99,
        image: "https://images.ctfassets.net/hmm5mo4qf4mf/4EwYTpKVVXomhKP0iwxz5l/eee8a3f7c09dab1956a92d984523ee0c/arctis_nova_pro_wl_black_img_buy_1.png__1920x1080_crop-fit_optimize_subsampling-2-227.png?fm=webp&q=90&fit=scale&w=1920",
        description: 
            "High-Fidelity Gaming Audio with Active Noise Cancellation",
    },
]

// makes data useable to other files
export function getProducts() {
    return products
}