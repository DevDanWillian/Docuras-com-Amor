import Link from "next/link";
import Image from "next/image";

import Logo from "/public/elements/logo.jpg";


export const Navbar = () => {
  return (
    <div className='sticky top-0'>

      <section className="bg-rosa-claro pt-3 pb-3  flex justify-center rounded-b-2xl border-b-8 border-marrom-escuro">
      <div className="bg-rosa-claro rounded-b-2xl flex items-center text-marrom-escuro text-lg underline-offset-4 gap-10">
      <Image src={Logo} width={40} height={40} alt="logo navbar" priority className="w-10 h-10"/>

        <Link href="#inicio" className="hover:underline decoration-wavy">
          Inicio
        </Link>
        <Link href="#produtosId" className="hover:underline decoration-wavy">
          Produtos
        </Link>

        <Image src={Logo} width={40} height={40} alt="logo navbar" priority className="w-10 h-10"/>
        
      </div>
    </section>
    
    </div>
  );
};

export default Navbar;
