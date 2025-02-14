import "./App.css";
import { useSelector } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import Sec10 from "./components/Sec10";
import Sec11 from "./components/Sec11";
import Sec12 from "./components/Sec12";
import Sec13 from "./components/Sec13";
import Sec2 from "./components/Sec2";
import Sec3 from "./components/Sec3";
import Sec4 from "./components/Sec4";
import Sec5 from "./components/Sec5";
import Sec6 from "./components/Sec6";
import Sec7 from "./components/Sec7";
import Sec8 from "./components/Sec8";
import Sec9 from "./components/Sec9";

function App() {
  const cartData = useSelector((state) => {
    return state.cart;
  });
  console.log(cartData);

  return (
    <>
      <div>
        <Header />
        <ImageSlider />
        <Sec2 />
        <div className="max-w-7xl m-auto">
          <Sec3 />
        </div>
        <div className="max-w-7xl m-auto">
          <Sec4 />
        </div>
        <Sec5 />
        <Sec6 />
        <Sec7 />
        <Sec2 />
        <div className="max-w-7xl m-auto">
          <Sec8 />
        </div>
        <Sec9 />
        <Sec10 />
        <Sec11 />
        <Sec12 />
        <Sec13 />
      </div>

      <Footer />
    </>
  );
}

export default App;
