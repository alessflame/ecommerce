import React from "react";
import styles from "./Navbar.module.css";
import Link from "next/link";
import Image from "next/image";

function Navbar({ visible }) {
  return (
    <div
      className={styles.nav}
      style={visible === true ? { transform: "translateX(0vw)" } : {}}
    >
      <Image src={attitude} alt="vercel" />
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/blog">
        <a>Blog</a>
      </Link>
      <Link href="/shop">
        <a>Shop</a>
      </Link>
      <Link href="/account">
        <a>Account</a>
      </Link>
    </div>
  );
}

export default Navbar;
