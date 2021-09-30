import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormularioCadastro from '../formulario/FormularioCadastro';
import './cadastro.css';

export default function Cadastro({ products }) {
  //Desestruturando arry: com variaveis
  //let [r, c, g, ...rest] = [...products]
  //console.log(r, c, g, rest)

  const [idAtual, setIdAtual] = useState('');
  const [count, setCount] = useState(0);

  function AddMaisUm() {
    setCount(count + 1);
  }

  function RemovaUm() {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  }

  return (
    <div>
      <Link to="/cart">
        <i className="fas fa-shopping-cart mrg-d">
          <p className="p-n">{count}</p>
        </i>
      </Link>
      <div className="jumbotron jumbotron-fuid">
        <button className="btn btn-dark" onClick={AddMaisUm}>
          Add Cart
        </button>
        <button className="btn btn-dark ml-2" onClick={RemovaUm}>
          Remove Cart
        </button>
        <conatiner>
          <h1 className="display-4">Cadastro de Pacientes</h1>
          <p className="lead">Itens Logo Abixo</p>
        </conatiner>
      </div>

      <div className="row">
        <div className="col-md-5">
          <FormularioCadastro {...{ idAtual, products }} />
        </div>
        <div className="col-md-7">
          <h2>Lista de Clientes</h2>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">
                  <i className="fab fa-shopify" />
                </th>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">slug</th>
                <th scope="col">Image</th>
              </tr>
            </thead>

            {products.map((r) => (
              <tbody key={r.id}>
                <tr>
                  <th scope="row">
                    <i className="fas fa-eye" />
                  </th>

                  <td>{r.title}</td>
                  <td>{r.price}</td>
                  <td>{r.quantity}</td>
                  <td>{r.slug}</td>
                  <td>
                    <img src={r.image1} alt="Erro na img" className="col-5" />
                    <a
                      href={false}
                      onClick={() => {
                        setIdAtual(r);
                      }}
                    >
                      <i className="fas fa-edit mt-2 p-2 text-info btn btn-light card" />
                    </a>
                    <a href={false}>
                      <i className="fas fa-trash-alt mt-2 p-2 text-danger btn btn-light card" />
                    </a>
                  </td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </div>
  );
}
