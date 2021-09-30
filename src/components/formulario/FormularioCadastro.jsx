import React, { useEffect, useState } from 'react';
//import { useHistory } from 'react-router-dom'
import axios from 'axios';

const camposIniciasDeValores = {
  title: '',
  price: 0,
  image1: '',
  image2: '',
  image3: '',
  tags: '',
  description: '',
  slug: '',
  cor: '',
};

export default function FormularioCadastro(props) {
  const [values, setValues] = useState(camposIniciasDeValores);
  //const history = useHistory()

  function onChange(ev) {
    const { name, value } = ev.target;

    setValues({ ...values, [name]: value });
  }

  /*const mainipuladorFormEnvio = e => {
      e.preventDefault()
      props.onSubmit()
    }*/

  function onSubmit(ev) {
    ev.preventDefault();

    axios
      .post('https://api-in-product-for-store.herokuapp.com/', values)
      .then((res) => {
        alert('O produto foi Criado com sucesso');
        window.location.reload();
      })
      .catch((erro) => {
        alert('Houve um erro que foi ' + erro);
        window.location.reload();
      });
  }

  useEffect(() => {
    if (props.idAtual === '') {
      setValues({
        ...camposIniciasDeValores,
      });
    } else {
      setValues({
        ...props.products[props.idAtual],
      });
    }
  }, [props.idAtual, props.products]);

  console.log(props.idAtual);

  return (
    <form onSubmit={onSubmit}>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-file-signature  mt-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder=" Title"
          name="title"
          value={values.title}
          onChange={onChange}
        />
      </div>
      <div className="row">
        <div className="form-group input-group col-md-6">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="fas fa-file-invoice-dollar mt-2 text-info" />
            </div>
          </div>
          <input
            type="number"
            className="form-control"
            placeholder=" Prince"
            name="price"
            value={values.price}
            onChange={onChange}
          />
        </div>

        <div className="form-group input-group col-md-6">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="fas fa-file-signature  mt-2 text-info" />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder=" Cor"
            name="cor"
            value={values.cor}
            onChange={onChange}
          />
        </div>

        <div className="form-group input-group col-md-6">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text text-info">
              <i className="fas fa-file-signature  mt-2 text-info" />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder=" Tags"
            name="tags"
            value={values.tags}
            onChange={onChange}
          />
        </div>

        <div className="form-group input-group col-md-6">
          <div className="input-grou-prepend align-self-center">
            <div className="input-group-text">
              <i className="fas fa-file-signature  mt-2 text-info" />
            </div>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder=" Slug"
            name="slug"
            value={values.slug}
            onChange={onChange}
          />
        </div>
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-file-image mt-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder=" image1"
          name="image1"
          value={values.image1}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-file-image mt-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder=" image2"
          name="image2"
          value={values.image2}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-file-image mt-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder=" image3"
          name="image3"
          value={values.image3}
          onChange={onChange}
        />
      </div>
      <div className="form-group input-group">
        <div className="input-grou-prepend align-self-center">
          <div className="input-group-text">
            <i className="fas fa-file-signature  mt-2 text-info" />
          </div>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder=" description"
          name="description"
          value={values.description}
          onChange={onChange}
        />
      </div>
      <div className="form-group">
        <input
          type="submit"
          value="Salvar"
          className="btn btn-primary btn-block"
        />
      </div>
    </form>
  );
}
