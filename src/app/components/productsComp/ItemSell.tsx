/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import Image from "next/image";
interface iItemSellProps {
  srcImg: string;
  altImg: string;
  width: number;
  height: number;
  idImg: string;
  labelTxt: string;
  cost: number;
  costsLabel: string;
}

export const createNewItem = (props: iItemSellProps) => {
  return {
    id: props.idImg,
    name: props.labelTxt,
    price: props.cost,
    image: props.srcImg,
  };
};

const ItemSell = ({
  srcImg,
  altImg,
  width,
  height,
  idImg,
  labelTxt,
  cost,
  costsLabel,
}: iItemSellProps) => {
  const handleAddToCart = () => {
    if (typeof window !== "undefined") {
      const storedCart = localStorage.getItem("cart") || "[]";
      const cart = JSON.parse(storedCart);

      const newItem = createNewItem({
        srcImg,
        altImg,
        width,
        height,
        idImg,
        labelTxt,
        cost,
        costsLabel,
      });

      cart.push(newItem);
      localStorage.setItem("cart", JSON.stringify(cart));

      // Dispara o evento para notificar outros componentes
      alert("Evento cartUpdated disparado");
      window.dispatchEvent(new Event("cartUpdated"));

      alert(`${labelTxt} adicionado ao carrinho!`);
    }
  };

  return (
    <div className="border p-4 bg-green-100 rounded-lg shadow-lg text-center items-center">
      <button onClick={handleAddToCart} className="w-full">
        <Image
          src={srcImg}
          alt={altImg}
          width={width}
          height={height}
          id={idImg}
          className="rounded-lg mx-auto"
          loading="eager"
          priority // Add priority for above-the-fold images
        />
        <label
          htmlFor={idImg}
          className="block mt-1 text-center text-green-950"
        >
          {labelTxt}
        </label>
        <span>R${costsLabel}</span>
      </button>
    </div>
  );
};

export default ItemSell;
export type { iItemSellProps };
