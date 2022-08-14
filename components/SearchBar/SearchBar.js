import React, { useState } from "react";
import { Input, Box, Container, Stack } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import style from "./SearchBar.module.css";
import { useDispatch, useSelector } from "react-redux";
import { addFilter } from "../../redux/slices/filterSlice";

function SearchBar() {
  const [search, setSearch] = useState("");

  const dispatch = useDispatch();
  const { filter } = useSelector((state) => state);

  const setFilter = async () => {
    dispatch(addFilter(search.trim()));
    console.log(await filter.value);
  };

  const changeValue = (value) => {
    setSearch(value);
  };

  return (
    <Container display="flex">
      <Input
        onChange={(e) => changeValue(e.target.value)}
        className={style.bar}
        placeholder="small size"
        size="md"
      />
      <Box
        className={style.icon}
        paddingX="10px"
        paddingY="1"
        onClick={setFilter}
      >
        <SearchIcon fontSize="30px" />
      </Box>
      <h2>{search}</h2>
    </Container>
  );
}

export default SearchBar;
