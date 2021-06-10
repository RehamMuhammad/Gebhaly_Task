import React, { useContext } from "react";
import {
  Container,
  Paper,
  Typography,
  CardMedia,
  Grid,
} from "@material-ui/core";
import confirmationStyles from "../../styles/Confirmation.module.scss";
import { CartContext } from "../../pages/_app";
// import  Image  from 'next/image';

const Confirmation = () => {
  const cart = useContext(CartContext);
  return (
    <Container className={confirmationStyles.main}>
      {cart.line_items?.map((item) => (
        <Grid container>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Paper className={confirmationStyles.container} key={item.id}>
              <CardMedia
                className={confirmationStyles.img}
                image={item.media.source}
                title={item.name}
              />
              {/* <Image src={'item.media.source'} alt={item.name} width={300} height={300} className={confirmationStyles.img} /> */}
              <Typography variant="h5" className={confirmationStyles.name}>
                {item.name} <br />
                <h5 style={{ color: "grey", display: "inline" }}>
                  Price: {item.price.raw}$
                </h5>
              </Typography>
              <Typography variant="h5" className={confirmationStyles.number}>
                Item Number: {item.quantity}
              </Typography>
              <Typography variant="h5" className={confirmationStyles.price}>
                Total Price: {item.line_total.formatted}$
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      ))}
      <Typography variant="h3" style={{ marginTop: "100px", color: "#1f2951" }}>
        {`Total Price: ${cart.subtotal?.raw}$`}
      </Typography>
    </Container>
  );
};
export default Confirmation;
