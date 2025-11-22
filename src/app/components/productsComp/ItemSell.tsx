import Image from "next/image";

interface iItemSellProps {
  image: string;
  altImage: string;
  width: number;
  height: number;
  id: number;
  name: string;
  price: number;
  weight:string;
}

const ItemSell = ({
  image,
  altImage,
  width,
  height,
  id,
  name,
  price,
  weight,
}: iItemSellProps) => {

  const formattedPrice = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(price);

  return (
    <div className="border p-4 bg-green-100 rounded-lg shadow-lg text-center items-center">
      <button className="w-full"  id="box-product">
        <div className="w-[150px]  h-[150px] relative overflow-hidden mx-auto">
        <Image
          src={image}
          alt={altImage}
          
          
          id={`product-${id}`}
          className="rounded-lg mx-auto object-cover object-center"
          loading="eager"
          priority // Add priority for above-the-fold images
        fill
        /></div>
        <label
          htmlFor={`product-${id}`}
          className="block mt-1 text-center text-green-950"
        >
          {name}
        </label>
        <span>{weight}</span>
        <br />
        <span>{formattedPrice}</span>
      </button>
    </div>
  );
};

export default ItemSell;
export type { iItemSellProps };
