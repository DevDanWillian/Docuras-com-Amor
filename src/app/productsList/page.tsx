"use client";

import { useEffect, useState } from "react";
import ItemSell, { iItemSellProps } from "../components/productsComp/ItemSell";
import CakesInstagram from "..//components/productsComp/CakesInstagram";
import productsData from "../../data/products.json";

const ProductsList = () => {

  const [products, setProducts] = useState<iItemSellProps[]>([]);

  useEffect(() => {
    // Use static JSON data instead of API call for static export compatibility
    try {
      // Get basePath for production deployment
      const isProd = process.env.NODE_ENV === "production" || process.env.GITHUB_PAGES === "true";
      const basePath = isProd ? "/Docuras-com-Amor" : "";

      // Transform the data to include required width and height properties and correct image paths
      const transformedProducts = productsData.map(product => ({
        ...product,
        width: 150,
        height: 150,
        image: basePath + product.image
      }));
      setProducts(transformedProducts);
    } catch (error) {
      console.error("Erro ao carregar produtos:", error);
      setProducts([]);
    }
  }, []);






  return (
    <section className="" id="produtosId">
      <h2 className="ms-10 text-4xl text-marrom-escuro font-bold my-5 underline underline-offset-auto">
        Produtos
      </h2>

      <div className="px-3 sm:mx-10 md:mx-20 py-1 bg-rose-200 rounded-2xl my-3" id="candies">
        <h3 className="text-3xl text-marrom-escuro my-1 flex ">Doces</h3>
        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-1 my-2"

        >
          {products.map((item) => (
            <ItemSell
              key={item.id}
              image={item.image}
              altImage={item.altImage}
              width={150}
              height={150}
              id={item.id}
              name={item.name}
              price={item.price}
              weight={item.weight}
            />
          ))}
        </div>
      </div>

      <CakesInstagram />
    </section>
  );
};

export default ProductsList