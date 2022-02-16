import React from "react";

const conteudos = [
  {
    conteudo: 'High Order Functions',
    bloco: 8,
    status: 'Aprendido'
  },
  {
    conteudo: 'Composicao de Componentes',
    bloco: 11,
    status: 'Aprendendo',
  },
  {
    conteudo: 'Composicao de Estados',
    bloco: 12,
    status: 'Aprenderei'
  },
  {
    conteudo: 'Redux',
    bloco: 16,
    status: 'Aprenderei'
  },
];

const Content = () => {
  return (
    <section className="container-flex">
      {conteudos.map((elemento, index) => {
       return (
        <div key = {index} className = 'content' >
          <h3>{`${elemento.conteudo}`}</h3>
          <p>{`Status: ${elemento.status}`}</p>
          <p>{`Bloco: ${elemento.bloco}`}</p>
        </div>
       ) 
      })}
    </section>
  )
}

export default Content;