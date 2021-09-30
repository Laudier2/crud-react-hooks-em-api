import React, { useEffect, useState } from 'react'
import Cadastro from './components/Cadastro/Cadastro'
import Cart from './components/cart/Cart'
import Axios from 'axios'
import { Route } from "react-router-dom";


function App() {

  const [ product, setProduct ] = useState([])

  const url = "https://api-in-product-for-store.herokuapp.com/"

  useEffect(() => {
    const GetReq = async () => {
      
      const req = await Axios.get(url)
      const res = await req.data;

      console.clear()
    
      setProduct(res)
    }

    GetReq()
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-md-8 offset-md-2">
          <Route exact path="/" component={() => <Cadastro products={product}/>} />
          <Route exact path="/cart" component={() => <Cart cart={product} />} />
        </div>
      </div>
    </>
  );
}

export default App;
