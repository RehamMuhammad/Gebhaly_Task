import React from 'react';
import {Card, CardMedia, CardContent, CardActions, Typography, IconButton} from '@material-ui/core';
import {AddShoppingCart} from '@material-ui/icons';
import productStyles from '../../../styles/Product.module.scss';


const Product = ({product, onAddToCart}) => {
    return (
        <Card className='root'>
            <CardMedia className={productStyles.media} image={product.media.source} title={product.name} />
            <CardContent>
                <div className={productStyles.CardContent}>
                <Typography  variant="h4" gutterBottom>
                    {product.name}
                </Typography>
                <Typography variant="h5" >
                    {product.price.formatted_with_symbol}
                </Typography>
                </div>
                </CardContent>
                <CardContent>
                <Typography dangerouslySetInnerHTML={{ __html: product.description}} variant="body2" color='textSecondary' />
                </CardContent>
                <CardContent>
                <div className={productStyles.CardContent}>
                <Typography variant="h6" >
                Inventory available 
                </Typography>
                <Typography variant="h6" >
                    {product.inventory.available}
                </Typography>
                </div>
            </CardContent>
            <CardActions disableSpacing className={productStyles.cartIcon}>
                <IconButton aria-label="Add To Cart" onClick={() => onAddToCart(product.id,1)}>
                    <AddShoppingCart />
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
