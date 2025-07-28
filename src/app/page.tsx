import Produtos from "./products/page";
import Bolos from "./cake/page";
import TextBody from "./components/textBody";

export default function Home() {
  return (
    <div className="mx-3 sm:mx-10 md:mx-20">
      <TextBody />
    <Produtos/>
    <Bolos/>
    </div>
  );
}
