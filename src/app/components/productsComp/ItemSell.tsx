/* eslint-disable @typescript-eslint/no-unused-vars */
import Image from 'next/image';


interface iItemSellProps {
  srcImg: string ;
  altImg: string;
  width:number;
  height:number;
  idImg:string;
  labelTxt: string;
  cost: number;
  costsLabel: string;

}

const ItemSell = ({srcImg, altImg, width, height, idImg, labelTxt, cost,costsLabel
}:iItemSellProps) => {
  return (
    <div className="border p-4 bg-green-100 rounded-lg shadow-lg text-center">
      <button>{/**AO CLICAR TEM QUE SER ADICIONADO AO CARRINHO **/}
        <Image src={srcImg} alt={altImg} width={width} height={height} id={idImg} className='rounded-lg'/>
        <label htmlFor={idImg} className="block mt-1 text-center text-green-950">{labelTxt}</label>
        <span>R${costsLabel}</span>
      </button>
    </div>
  );
};

export default ItemSell;
