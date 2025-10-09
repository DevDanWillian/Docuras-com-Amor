/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from "next/image";

import ItemSell from "../components/productsComp/ItemSell";

const Pudim = "./products/pudim.webp";
const OvoDePascoa = './products/ovo_pascoa_vermelho.webp'
const PalhaItaliana = './products/palha_italiana.webp'
const VulcaoNevado = './products/mini_vulcao_nevado.webp'
const Guirlanda = '/products/guirlanda.webp'
const BoloDeBanana = '/products/bolo_banana.webp'
const TacaDaFelicidade = '/products/taca_da_felicidade.webp'
const TortaBrownie = '/products/torta_brownie_simple.webp'

const Produtos = () => {
  return (
    <section className="" id="produtosId">
      <h2 className="text-4xl text-marrom-escuro" >
        Produtos
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-1">

        <ItemSell srcImg={Pudim} altImg="pudim" width={150} height={150} idImg="pudim" labelTxt="Mini Pudim" cost={13} costsLabel={'13,50'}/>

        <ItemSell srcImg={OvoDePascoa} altImg="Ovo de Pascoa" width={150} height={150} idImg="ovoDePascoa" labelTxt="Ovo de Páscoa" cost={50} costsLabel={'50,00'}/>

        <ItemSell srcImg={PalhaItaliana} altImg="Palha Italiana" width={150} height={150} idImg="palhaItaliana" labelTxt="Palha Italiana" cost={15} costsLabel={'15,50'}/>

        <ItemSell srcImg={VulcaoNevado} altImg="Mini Bolo Vulcão Nevado" width={150} height={150} idImg="boloVulcaoNevado" labelTxt="Mini Bolo Vulcão Nevado" cost={13} costsLabel={'13,00'}/>

        <ItemSell srcImg={Guirlanda} altImg="Guirlanda de Natal" width={150} height={150} idImg="guilanda" labelTxt="Guirlanda de Natal" cost={25.00} costsLabel={'25,00'}/>

        <ItemSell srcImg={BoloDeBanana} altImg="Bolo de Banana Caramelizada" width={150} height={150} idImg="boloDeBanana" labelTxt="Bolo de Banana" cost={35} costsLabel="35,00"/>

        <ItemSell srcImg={TortaBrownie} altImg="Torta de Brownie e Nuttela" width={150} height={150} idImg="tortaBrownie" labelTxt="Torta Brownie" cost={35} costsLabel="35,00"/>
        
        <ItemSell srcImg={TacaDaFelicidade} altImg="Taça da Felicidade" width={150} height={150} idImg="tacaDaFelicidade" labelTxt="Taça da Felicidade" cost={50} costsLabel="50,00"/>

        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </section>
  );
};
export default Produtos;
