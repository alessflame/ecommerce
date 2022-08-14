import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header/Header";
import ProductsList from "../components/ProductsList/ProductsList";

export const getServerSideProps = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL_DEPLOY}/api/products`);
  const products = await res.json();

  return {
    props: { products },
  };
};

export default function Home({ products }) {
  const selectProducts = () => {
    let filterProducts = [];

    for (let i = products.length - 3; i < products.length; i++) {
      filterProducts.push(products[i]);
    }
    console.log(filterProducts);
    return filterProducts;
  };

  return (
    <div>
      <Head>
        <title>Attitude</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <ProductsList title="Prodotti recenti" products={selectProducts()} />
    </div>
  );
}
