import React, {useContext} from 'react';
import {Container, Button , Grid, Typography} from '@material-ui/core';
import cartStyles from  '../../styles/Cart.module.scss';
import CartItem from './CartItem/Cartitem';
import { CartContext } from '../../pages/_app';
import Link from 'next/Link';

const Cart = ({ updateItemNumber, removeItemFromCart, getCartEmpty}) => {
    const cart = useContext(CartContext);

    const EmptyCart = () => (
                <Typography variant="subtitle1">
            You have no items in your Shopping Cart right now!
            <Link href="/" className={cartStyles.link} > Start adding some?</Link> 
        </Typography>
    );

    const FilledCart = () => (
        <>
        <Grid container spacing={3}>
            {cart.line_items?.map((item) => (
                <Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item={item} updateItemNumber={updateItemNumber} removeItemFromCart={removeItemFromCart}/>
                </Grid>
            ))}
        </Grid>
        <div className={cartStyles.cartDetails}>
            <Typography variant="h4">
            {`Subtotal: ${cart.subtotal?.raw}$`}
            </Typography>
            <div  className={cartStyles.buttons}>
                <a><Button size="large" type="button" variant="contained" style={{background: '#ff9259', color:'#FFF'  }}
                onClick={getCartEmpty}>
                    Empty Cart
                </Button></a>
                <Link href="/Confirmation/confirm">
                <a><Button size="large" type="button" variant="contained" style={{background: '#1f2951', color:'#FFF'}}>
                    Confirm Request
                </Button></a>
                </Link>
            </div>
            </div>
        </>
);

    return (
        <Container>
            <div className={cartStyles.toolbar}/>
            <Typography className={cartStyles.title} variant="h3">Your Shopping Cart <br/> <br/>
            {!cart.line_items?.length ?   <EmptyCart/> : <FilledCart/>}      
            </Typography>      
        </Container>
    )
}

export default Cart;
