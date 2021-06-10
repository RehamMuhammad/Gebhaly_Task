import Head from "next/head";
import React, { useState, useEffect } from "react";
import { commerce } from "../../lib/commerce";
import Cart from "../../Components/Cart/Cart";

export const CartContext = React.createContext();

//you can get to the Cart page through the url /Cart/cart

export default function CartPage() {
  const [cart, setCart] = useState({});

  //fetching the cart API and using its methods to update,remove items & delete it
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const updateItemNumber = async (productId, quantity) => {
    const response = await commerce.cart.update(productId, { quantity });
    setCart(response.cart);
  };

  const removeItemFromCart = async (productId) => {
    const response = await commerce.cart.remove(productId);
    setCart(response.cart);
  };

  const getCartEmpty = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };

  useEffect(() => {
    fetchCart();
  }, []);
  console.log(cart);

  return (
    <div>
      <Head>
        <title>your Cart</title>
      </Head>
      <body>
        <CartContext.Provider value={cart}>
          <Cart
            updateItemNumber={updateItemNumber}
            removeItemFromCart={removeItemFromCart}
            getCartEmpty={getCartEmpty}
          />
        </CartContext.Provider>
      </body>
    </div>
  );
}
