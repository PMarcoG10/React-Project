# 🛍️ShopShop - E-commerce Web App

# 📌Overview
ShopShop is a simple e-commerce web app built using React and JavaScript. 
It allows users to browse products, view details, manage a shopping cart, create an account and simualate a checkout.
This project focuses on core React Concepts like components, hooks, and global states.

# 🚀Features
- Browse list of products
- View detailed product information
- Add/Remove items from the cart
- Update item quantities
- view cart totals (subtotal, tax, total)
- simulated checkout
- basic authentitcation structure

# 🛠️Tech
- React
- JavaScript
- CSS (custom styling)

# 📁Project Structure
## 📄Pages
- **Home**:

  Displays all available products
- **ProductDetail**:

  Shows detailed information for selected product
- **Checkout**:

  Displays Cart items, pricing summary, and allows order placement
- **Authentication**:

  Handles user authention (Login/Sign Up)

## 🧩Components
- **NavBar**:

  Navigation bar for routing between pages
- **ProdcutCard**:

  Components for displaying product info as a card

## 🌐Context
- **AuthContext**:

  Manages authentication state (sign up / login)
- **CartContext**:

  Handles cart functionality
  - Add/Remove items
  - Update quantities
  - calculate subtotal, tax, and total
  - remove item

## 🗃️Data
- **Products**:

  Mock product data used as a fake API:
  - id
  - name
  - price
  - image
  - description

# ⏯️Showcase
Link to the demo project

https://react-project-zeta-nine-47.vercel.app/

# 📄License
This project is for educational purposes.
