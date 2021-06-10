import React from 'react';
import {AppBar, Toolbar, IconButton, Badge} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import navStyles from '../../styles/Nav.module.scss';
import NextLink  from 'next/Link';
import  Image  from 'next/image';

const Navbar = ({totalCartItems}) => {
    return (
        <>
                <nav className={navStyles.appBar}>              
                <NextLink href="/"  > 
                <a className={navStyles.logo}><Image src='/gebhaly.png' alt="Gebhaly" height={40} width={130}  /></a>
                </NextLink>
                </nav>
                <div className={navStyles.grow} />
                <div  className={navStyles.icon}>
                    <NextLink href="/Cart/cart">
                    <IconButton  aria-label="Show cart items" color="inherit" >
                        <Badge badgeContent={totalCartItems} color="error">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    </NextLink>
                </div>
        </>
    )
}
export default Navbar;
