import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography} from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import navStyles from '../../styles/Nav.module.scss';
import Link from 'next/Link';
import  Image  from 'next/image';

const Navbar = ({totalCartItems}) => {
    return (
        <>
                <nav className={navStyles.appBar}>              
                <Link href="/"  > 
                <a className={navStyles.logo}><Image src='/gebhaly.png' alt="Gebhaly" height={40} width={130}  /></a>
                </Link>
                </nav>
                <div className={navStyles.grow} />
                <div  className={navStyles.icon}>
                    <Link href="/Cart/cart">
                    <IconButton  aria-label="Show cart items" color="inherit" >
                        <Badge badgeContent={totalCartItems} color="error">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                    </Link>
                </div>
        </>
    )
}
export default Navbar;
