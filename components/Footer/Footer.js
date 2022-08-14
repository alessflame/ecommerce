import React from "react";
import Image from "next/image";
import style from "./Footer.module.css";
import {
  List,
  ListItem,
  ListIcon,
  OrderedList,
  UnorderedList,
} from "@chakra-ui/react";

function Footer() {
  return (
    <div className={style.footer}>
      <UnorderedList className={style.list}>
        <h2>Tools</h2>
        <ListItem>NextJs</ListItem>
        <ListItem>MongoDB</ListItem>
      </UnorderedList>
      <Image
        color="white"
        src="/Attitude.png"
        alt="attitude"
        width="120px"
        height="30px"
      />
    </div>
  );
}

export default Footer;
