// mock api to display products for the website

// a list of products
const products = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 179.99,
    image:
      "https://m.media-amazon.com/images/I/51+51Ur4jzL._AC_UF894,1000_QL80_.jpg",
    description:
      "Premium wireless mouse with new innovations in ultra low latency technology",
  },
  {
    id: 2,
    name: "Wireless Headset",
    price: 349.99,
    image:
      "https://images.ctfassets.net/hmm5mo4qf4mf/4EwYTpKVVXomhKP0iwxz5l/eee8a3f7c09dab1956a92d984523ee0c/arctis_nova_pro_wl_black_img_buy_1.png__1920x1080_crop-fit_optimize_subsampling-2-227.png?fm=webp&q=90&fit=scale&w=1920",
    description: "High-Fidelity Gaming Audio with Active Noise Cancellation",
  },
  {
    id: 3,
    name: "Gaming Keyboard",
    price: 129.95,
    image:
      "https://www.gravastar.com/cdn/shop/files/MercuryK1GamingKeyboard-GradientBlack_75_MechanicalKeyboard.webp?v=1765441622&width=700",
    description: "Fastest gaming keyboard with hall effect switches",
  },
  {
    id: 4,
    name: "Portable Gaming Computer",
    price: 600,
    image: "https://m.media-amazon.com/images/I/61Ub5N8jQlL.jpg",
    description: "Portable hand hold gaming PC that runs triple A title games",
  },
  {
    id: 5,
    name: "Laptop",
    price: 1999,
    image:
      "https://www.bhphotovideo.com/images/fb/razer_rz09_0510tem4_r3u1_razer_blade_16_s10_nt_win_11_dual_1804307.jpg",
    description: "Fast and slim reliable laptop for home and office work",
  },
  {
    id: 6,
    name: "Gaming Phone",
    price: 550,
    image:
      "https://s7d1.scene7.com/is/image/dmqualcommprod/asus-rog-phone-6-pro-1?$QC_Responsive$&fmt=png-alpha",
    description: "For your gaming needs fast and reliable",
  },
  {
    id: 7,
    name: "Gaming Monitor",
    price: 600,
    image:
      "https://sm.pcmag.com/pcmag_uk/photo/l/lg-45-ultr/lg-45-ultragear-oled-45gx950a-b_yy2d.jpg",
    description: "Fast refresh gaming monitor to dominate the field",
  },
  {
    id: 8,
    name: "Energy Drink",
    price: 3.45,
    image:
      "https://i5.walmartimages.com/asr/c9e445f3-1800-40d0-81ab-6b93a9aaacb3.d2f8d87c58e8287c26cae8b3b6d9e38a.jpeg",
    description: "Stay vigilant and sharp to win the competition",
  },
];

// get all products
export function getProducts() {
  return products;
}

// get a single product by ID
export function getProductById(id) {
  return products.find((p) => p.id === Number(id));
}
