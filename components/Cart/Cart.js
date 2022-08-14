import { Box, Button, Stack } from "@chakra-ui/react";
import React, { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import CartConfirm from "../CartConfirm/CartConfirm";
import CartProduct from "../CartProduct/CartProduct";
import { dropCart } from "../../redux/slices/cartSlice";
import Payment from "../Payment/Payment";

function Cart() {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const [price, setPrice] = useState(0);
  const [pay, setPay] = useState(false);

  const showPay = () => {
    if (price > 0) setPay(!pay);
  };

  const totalPrice = useCallback(() => {
    let price = 0;

    cart.products.forEach((product) => {
      price += product.price;
    });
    console.log(price);
    return price;
  }, [cart.products]);

  useEffect(() => {
    setPrice(totalPrice());
  }, [totalPrice]);

  return (
    <Stack display="flex" justifyContent="flex-start">
      {cart.products.map((product) => (
        <CartProduct key={product.id} {...product} />
      ))}

      <CartConfirm total={price} showPay={showPay} />

      <Button w="50%" onClick={() => dispatch(dropCart())}>
        Svuota Carrello
      </Button>

      {pay === true ? <Payment showPay={showPay} /> : ""}
    </Stack>
  );
}

export default Cart;
