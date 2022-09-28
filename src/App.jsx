import logo from "./logo.svg";
import applogo from "./applogo.png";
import banana from "./banana.svg";
import tomato from "./tomato.svg";
import "./App.css";
import Type from "./Type";
import Input from "./input";
import Quantity from "./quantity";
import AddButton from "./addbutton";
import Components from "./components";
import { useEffect, useState } from "react";
// import { store } from './storeproduct'

function App() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    if (localStorage.getItem("productList")) {
      setProductList(JSON.parse(localStorage.getItem("productList")));
    }
  }, []);

  document.addEventListener("removeItem", (event) => {
    const { detail } = event;
    setProductList((prevState) => {
      return prevState.filter((el) => el.name !== detail);
    });
  });
  const [product, setProduct] = useState({
    name: "",
    quantity: "",
    type: "",
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={applogo} className="Applogo" alt="" />
      </header>

      <div className="Wrap">
        <AddButton product={product} setProductList={setProductList} />
        <Input setProduct={setProduct} />
        <Quantity setProduct={setProduct} />
        <Type setProduct={setProduct} />
      </div>
      <h1 className="products">List of Products</h1>
      {productList.length && (
        <div className="checklist">
          <Components
            productList={productList}
            setProductList={setProductList}
          />
        </div>
      )}

      <div className="Background">
        {Array.from({ length: 9 }).map((item) => {
          return (
            <>
              <img src={tomato} className="tomato space" alt="" />
              <img src={banana} className="banana space" alt="" />
            </>
          );
        })}
      </div>
      <footer className="App-footer">
        <p className="Rights">Copyright 2022 by HannaA. All Rights Reserved.</p>
        <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
