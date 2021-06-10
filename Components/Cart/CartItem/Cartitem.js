import React from 'react';
import { Typography,Button, Card, CardActions, CardContent, CardMedia } from '@material-ui/core';
import cartItemStyles from '../../../styles/CartItem.module.scss';

const CartItem = ({item, updateItemNumber, removeItemFromCart}) => {
    return (
        <Card>
            <CardMedia image={item.media.source} alt={item.name} className={cartItemStyles.media} />
            <CardContent className={cartItemStyles.cardContent}>
                <Typography variant="h6" >{item.name}<br/>
                <p style={{color:'grey', display: 'inline', }}>Price: {item.price.raw}$</p>
                </Typography>
                <Typography variant="h6">total cost<br/>{item.line_total.formatted}$</Typography>
            </CardContent>
            <CardActions className={cartItemStyles.cardActions}>
                <div className={cartItemStyles.buttons}>
                    <Button type="button" size="large" onClick={()=> {updateItemNumber(item.id, item.quantity -1)}}>-</Button>
                    <Typography>{item.quantity}</Typography>
                    <Button type="button" size="large" onClick={()=> {updateItemNumber(item.id, item.quantity +1)}}>+</Button>
                </div>
                <Button variant="contained" type="button" style={{background: '#ff9259', color:'#FFF'}} onClick={() => removeItemFromCart(item.id)}>Remove</Button>
            </CardActions>
        </Card>
    )
}
export default CartItem;

