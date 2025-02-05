/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";
import Link from "next/link";

import Logo from "../../../public/elements/logo.jpg";

export const Navbar = () => {
  return (
    <section className="bg-marrom-claro pt-[2.5%] pb-[2.5%] px-[10%] m rounded-b-2xl ">

      <div className="flex items-center justify-evenly mx-[-20%] border-b-8 border-marrom-escuro pb-[2.5%]">
        <p className="text-verde-escuro font-serif text-6xl">Doçuras com Amor</p>
        <Image src={Logo} alt="logo Doçuras com Amor" height={150} className=""/>
      </div>      

      <div className=" flex items-center justify-center mt-3 text-verde-escuro text-2xl underline-offset-8">

      <Link href={} className="hover:underline decoration-wavy" replace>Conheça nossos Produtos</Link>

      </div>
    
<p id=""></p>
    </section>
  );
};

export default Navbar;
