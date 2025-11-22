"use client";

import { useEffect, useRef, useState } from "react";
import { LuShoppingCart } from "react-icons/lu";

export default function CartShop() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleCartShow = () => {
    setOpen((s) => !s);
  };

  useEffect(() => {
    const onDocumentClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onDocumentClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocumentClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed bottom-3 right-3 z-50"
      aria-haspopup="true"
    >
      <div className="rounded-full bg-marrom-escuro border-lime-900 border-2 p-2 shadow-lg">
        <button
          className="rounded-md focus:outline-double min-w-full min-h-full flex items-center justify-center"
          id="cart-button"
          aria-expanded={open}
          onClick={handleCartShow}
          type="button"
        >
          <LuShoppingCart size={30} color="#FFFFFF" />
        </button>
      </div>

      {/* Dropdown: posicionado para cima (bottom-full) e alinhado à direita, portanto se expande para a esquerda */}
      <div
        role="dialog"
        aria-hidden={!open}
        className={`absolute bottom-full right-0 mb-1 w-52 transform origin-bottom-right transition ease-out ${
          open ? "scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="bg-marrom-claro rounded-md shadow-lg p-3 text-sm text-gray-800 bg-opacity-60">
          
        </div>
      </div>
    </div>
  );
}