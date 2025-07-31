/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";

const BoloAniversario = "/products/bolo_de_aniversario.webp";

const Bolos = () => {
  return (
    <section className="">
      <h2 className="text-4xl text-marrom-escuro" id="produtosId">
        Bolos de Aniversário
      </h2>
      <div className="grid grid-cols-2 ">
        <div className="font-semibold ">b</div>
        <Image
          src={BoloAniversario}
          alt="Bolo de Aniversário"
          width={350}
          height={150}
          id="boloAniversario"
          className="rounded-lg"
        />
      </div>
    </section>
  );
};

export default Bolos;
