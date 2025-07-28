import Image from "next/image";
import Logo from "/public/elements/logo.jpg";

const Header = () => {
  return (
    <div>
      
      <section className="bg-rosa-claro rounded-2xl border-b-8 border-marrom-escuro">
      <div className="flex items-center justify-center gap-10 pt-6 pb-6 ">
        <div className="pb-">
          <p className="text-marrom-escuro font-serif text-4xl md:text-6xl ">
            Doçuras com Amor
          </p>
          <p className="text-marrom-escuro font-serif md:text-2xl text-center pt-2">
            Doceria e Confeitaria
          </p>
        </div>
        <Image
          src={Logo}
          alt="logo Doçuras com Amor"
          style={{
            maxWidth: "11%",
            height: "auto",
          }}
          className="inline-block align-middle"
        />
      </div>
      </section>
    </div>
    
  );
};

export default Header;
