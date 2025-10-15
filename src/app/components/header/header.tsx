import Image from "next/image";

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
          src="/elements/logo.jpg"
          alt="logo Doçuras com Amor"
          width={100}
          height={100}
          className="w-1/12"
        />
      </div>
      </section>
    </div>
    
  );
};

export default Header;
