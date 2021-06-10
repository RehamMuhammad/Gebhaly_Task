import Head from 'next/head';
import React, {useState, useEffect} from "react";
import { commerce }  from '../lib/commerce';
import Products from './../Components/Products/Products';


// the root file in My project (Viewing all available Products) 
export default function Home() {
  
const[products, setProducts] = useState([]);
const[cart, setCart] = useState({});

const fetchProducts = async () =>  { 
  const {data} = await commerce.products.list();
  setProducts(data)
}

const addProductsToCart = async (productId, quantity) => {
  const item = await commerce.cart.add(productId, quantity);
  setCart(item.cart)
}

useEffect (() =>{
  fetchProducts();
}, [])
console.log(products);
console.log(cart);

  return (
    <div >
      <Head>
        <title>Gebhaly Task</title>
        <meta name="gebhaly" />
      </Head>
      <body>
      <Products onAddToCart={addProductsToCart} />
      </body>
      </div>
  )
}
