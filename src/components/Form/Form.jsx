import React, { useState } from "react";
import Styles from "./Form.module.css";

export default function Form() {
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [price, setPrice] = useState();

  return (
    <div className= {Styles.formulario}>
    <form   action="send" >
      <label>
        Name 
        <input
          type="text"
          name="nombre"
          size="ancho_caja"
          maxlength="max_caracteres"
          value={name}
          label="Name"
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label>
      <br />Type 
        <input
          type="text"
          name="nombre"
          size="ancho_caja"
          maxlength="max_caracteres"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
      </label>
      <label>
      <br /> Price 
        <input
          type="text"
          name="nombre"
          size="ancho_caja"
          maxlength="max_caracteres"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </label>
      <button>Save</button>

      {name}
    </form>
    </div>
  );
}
