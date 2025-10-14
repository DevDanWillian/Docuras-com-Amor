import Header from "./components/header/header";
import ContactNavBar from "./components/header/ContactNavBar";
import Products from "./productsList/page";
import TextBody from "./textBody/page";
import CartShop from "./components/productsComp/cartShop";

export default function Home() {
  return (
    <div className="">
      <ContactNavBar />
      <Header />
      <div className="mx-3 sm:mx-10 md:mx-20">
        <Products />
        <TextBody />
        <CartShop/>
      </div>
    </div>
  );
}
