import logo from './logo.svg';
import applogo from './applogo.png'
import banana from './banana.svg';
import tomato from './tomato.svg';
import './App.css';
import Type from './Type';
import Input from './input';
import Quantity from './quantity';
import AddButton from './addbutton';
import Components from './components';
import { useState } from 'react';

function App() {
  const [productList, setProductList] = useState ([
  ]);
  const [product, setProduct] = useState ({
    name: '',
    quantity: '',
    type: ''
  });

  return (
    
    <div className="App">
        
      <header className="App-header">
        <img src= {applogo} className='Applogo' alt="" />

      </header>

      <div className="Wrap">
      <AddButton product={product} setProductList={setProductList}/>
      <Input setProduct={setProduct} />
      <Quantity setProduct={setProduct}/>
      <Type setProduct={setProduct} />
      </div>

    <div className='checklist'>
        <Components productList={productList} setProductList={setProductList}/>
    </div>

    <div className="Background">
       {
        Array.from({length:9}).map(item => { 
          return (
          <>
            <img src= {tomato} className='tomato space' alt=""/>
            <img src= {banana} className='banana space' alt="" />
            </>
          )
        })
       }
</div>
      <footer className="App-footer">
        <p className='Rights'>Copyright 2022 by HannaA. All Rights Reserved.</p>
      <img src={logo} className="App-logo" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
