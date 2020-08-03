import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormField'

function CadastroCategoria() {

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [valores, setValores] = useState( valoresIniciais );
  const [categorias, setCategorias] = useState([]);
  
  function setValues(chave, info) {
    setValores({
      ...valores,
      [chave]: info, // nome: 'valor'
    });
  }

  function handleChange(infoDoEvento) {
    setValues(infoDoEvento.target.getAttribute('name'), infoDoEvento.target.value);
  }

  function handleSubmit(infoDoEvento){
    infoDoEvento.preventDefault();
    setCategorias([
      ...categorias, //pega tudo o que já tem escrito na lista (não sobrescreva, reserve)
      valores
    ]);

    setValues(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: { valores.nome }</h1>

      <form onSubmit={ handleSubmit }>
        
        <FormField 
          label = 'Nome'
          type = 'text'
          value = { valores.nome }
          name = 'nome'
          onChange = { handleChange }
        />

        <FormField 
          label = 'Descrição'
          type = 'text'
          value = { valores.descricao }
          name = 'descricao'
          onChange = { handleChange }
        />

        <FormField 
          label = 'Cor'
          type = "color"
          value = { valores.cor }
          name = "cor"
          onChange = { handleChange }
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        { categorias.map((categorias, indice) => {
          return (
            /* permite dados duplicados */
            <li key={`${categorias}${indice}`}> 
              { categorias.nome }
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  )
}

  export default CadastroCategoria;