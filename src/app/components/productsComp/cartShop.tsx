/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
 
import { useEffect, useState } from "react";
import Image from "next/image";
import ItemSell, { iItemSellProps } from "./ItemSell";

export default function CartShop() {
  const [cart, setCart] = useState<iItemSellProps[]>([]);

  useEffect(() => {
    const loadCart = () => {
      alert("Evento cartUpdated recebido, carregando carrinho...");
      const storedCart = localStorage.getItem("cart") || "[]";
      try {
        const parsedCart = JSON.parse(storedCart);
        const validCart = Array.isArray(parsedCart)
          ? parsedCart.filter(
              (item) =>
                item &&
                typeof item === "object" &&
                "cost" in item &&
                "srcImg" in item &&
                "labelTxt" in item
            )
          : [];
        setCart(validCart); // Atualiza o estado com os itens válidos
      } catch (error) {
        alert("Failed to parse cart data:" + error);
        setCart([]); // Fallback para um carrinho vazio
      }
    };

    loadCart(); // Carrega o carrinho ao montar o componente
    const handleEvent = () => alert("Evento cartUpdated recebido!");
    window.addEventListener("cartUpdated", handleEvent);

    return () => {
      window.removeEventListener("cartUpdated", handleEvent);
    };
  }, []);

  const total = cart.reduce((acc, item) => acc + (item.cost || 0), 0);

  return (
    <div className="p-4 cursor-pointer border-4 rounded hover:shadow-md transition">
      <p className="text-xl font-bold mb-4 text-verde-escuro">Seu Carrinho</p>
      {cart.length === 0 ? (
        <p className="text-verde-escuro">Seu carrinho está vazio. 😢</p>
      ) : (
        <div>
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {cart.map((item, index) => (
              <li key={index} className="border p-4 rounded bg-green-50 shadow">
                <Image
                  src={item.srcImg}
                  alt={item.labelTxt}
                  className="w-full h-40 object-cover rounded"
                  width={50}
                  height={50}
                  loading="eager"
                />
                <p className="text-lg font-bold mt-1">{item.labelTxt}</p>
                <p className="text-rosa-escuro font-semibold">
                  R${item.cost.toFixed(2)}
                </p>
              </li>
            ))}
          </ul>
          <div className="mt-3 text-right">
            <p className="text-xl font-bold text-verde-escuro">
              Total: R${total.toFixed(2)}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
