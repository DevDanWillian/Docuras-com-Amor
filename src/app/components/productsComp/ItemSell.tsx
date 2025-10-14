/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

const tete = '  pudim.webp'

import Image from "next/image";
interface iItemSellProps {
  image: string;
  altImage: string;
  width: number;
  height: number;
  id: number;
  name: string;
  price: number;
}

const ItemSell = ({
  image,
  altImage,
  width,
  height,
  id,
  name,
  price,
}: iItemSellProps) => {

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <div className="border p-4 bg-green-100 rounded-lg shadow-lg text-center items-center">
      <button className="w-full">
        <Image
          src={image}
          alt={altImage}
          width={width}
          height={height}
          id={`product-${id}`}
          className="rounded-lg mx-auto"
          loading="eager"
          priority // Add priority for above-the-fold images
        />
        <label
          htmlFor={`product-${id}`}
          className="block mt-1 text-center text-green-950"
        >
          {name}
        </label>
        <span>R${formattedPrice}</span>
      </button>
    </div>
  );
};

export default ItemSell;
export type { iItemSellProps };
