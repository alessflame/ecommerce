import React, { useEffect, useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import style from "./Layout.module.css";
import MainAlert from "../MainAlert";
import Link from "next/link";
import { BsFillCartCheckFill } from "react-icons/bs";
import { Box, Container } from "@chakra-ui/react";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import UserAvatar from "../UserAvatar/UserAvatar";
import ModalComponent from "../ModalComponent/ModalComponent";
import jwt from "jwt-decode";
import { login } from "../../redux/slices/authSlice";

function Layout({ children }) {
  const { cart, auth } = useSelector((state) => state);
  const [visible, setVisible] = useState();
  const dispatch = useDispatch();
  const [token, setToken] = useState();

  const navBarVisible = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    const item = localStorage.getItem("attitude_token");
    console.log(item);
    if (item) {
      setToken(item);
      const decoded_token = jwt(item);
      console.log(decoded_token);
      dispatch(login(decoded_token));
    }
    console.log(item);

    if (window.screen.width > 650) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [dispatch, token]);

  return (
    <div>
      <ModalComponent />
      <div className={style.layout}>
        <MainAlert />

        <Navbar visible={visible} setVisible={setVisible} />

        <Container className={style.containerCart}>
          {visible === true ? (
            <CloseIcon className={style.hamburger} onClick={navBarVisible} />
          ) : (
            <HamburgerIcon
              className={style.hamburger}
              onClick={navBarVisible}
            />
          )}
          <Box className={style.section}>
            <UserAvatar name={auth.data.username} />
            <Link href={"/shop/cart"}>
              <a className={style.cart}>
                <b>{cart.value}</b>
                <BsFillCartCheckFill className={style.cartIcon} />
              </a>
            </Link>
          </Box>
        </Container>
        <Box mt="25px">{children}</Box>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
