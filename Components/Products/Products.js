import React, {useContext} from 'react';
import {Grid} from '@material-ui/core';
import productsStyles from '../../styles/Products.module.scss';
import { ProductContext } from '../../pages/_app';
import Product from './Product/Product'


const Products = ({ onAddToCart}) => {
    const products = useContext(ProductContext);
    return (
        <main className={productsStyles.content}>
            <Grid container justify="center" spacing={4}>
                {products.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
            
        </main>
    )
}

export default Products;