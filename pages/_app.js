import '../styles/globals.scss';
import Navbar from './../Components/Navbar/Navbar';
import React, {useState, useEffect} from "react";
import { commerce }  from '../lib/commerce';

export const ProductContext = React.createContext();
export const CartContext = React.createContext();

function MyApp({ Component, pageProps }) {

  const[products, setProducts] = useState([]);
  const[cart, setCart] = useState({});


//using Commerce.js Products API
  const fetchProducts = async () =>  { 
    const {data} = await commerce.products.list();
    setProducts(data)
}

//using Commerce.js Cart API
const fetchCart = async () =>  { 
  setCart(await commerce.cart.retrieve());
}

useEffect (() =>{
  fetchProducts();
  fetchCart()
}, [])

  return(
  <ProductContext.Provider value={products} >
  <CartContext.Provider value={cart} >
  <Navbar totalCartItems={cart.total_items} />
  <Component {...pageProps} />
  </CartContext.Provider>
  </ProductContext.Provider>
  )
}
export default MyApp
