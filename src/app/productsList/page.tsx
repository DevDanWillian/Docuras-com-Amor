/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { useEffect, useState } from "react";
import ItemSell, { iItemSellProps } from "../components/productsComp/ItemSell";

const ProductsList = () => {

  const [products, setProducts] = useState<iItemSellProps[]>([]);

  useEffect(() => {
    fetch('/api/products')
    .then(response => response.json())
    .then(data => {
      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        console.error('API retornou dados inválidos:', data);
        setProducts([]);
      }
    })
    .catch(error => {
      console.error('Erro ao buscar produtos:', error);
      setProducts([]);
    });
  }, [])

  return (
    <section className="" id="produtosId">
      <h2 className="text-4xl text-marrom-escuro" >Produtos</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">

        {products.map((item) => (
          <ItemSell key={item.id} image={item.image} altImage={item.altImage} width={150} height={150} id={item.id} name={item.name} price={item.price}/>
        ))}


      </div>
    </section>
  );
};
export default ProductsList;
