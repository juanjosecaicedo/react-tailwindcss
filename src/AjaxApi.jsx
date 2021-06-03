import React, { Component } from "react";

function Pokemon(props) {
  return (
    <figure>
      <img src={props.avatar} alt={props.name} />
      <figcaption>{props.name}</figcaption>
    </figure>
  );
}

export default class AjaxApi extends React.Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    
  }

  render() {
    return (
      <>
        <h2>Peticiones asincronas en componentes de clase</h2>
        <div className='container mx-auto p-6 bg-indigo-300'>
          <p className="text-indigo-900">este es un container de tailwindcss</p>
        </div>
      </>
    );
  }
}
