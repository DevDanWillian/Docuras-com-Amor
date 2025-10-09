import Header from "./components/header/header";
import ContactNavBar from "./components/header/ContactNavBar";
import Produtos from "./products/page";
import Bolos from "./cake/page";
import TextBody from "./textBody/page";

export default function Home() {
  return (
    <div className="">
      <ContactNavBar />
      <Header />
      <div className="mx-3 sm:mx-10 md:mx-20">
        <Produtos />
        <Bolos />
        <TextBody />
      </div>
    </div>
  );
}
