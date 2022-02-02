import React from "react";
import Style from "./Card.module.css";
import FakeRest from "./FakeRest.json";

export default function Card() {
  const [restaurantes, setRestaurantes]=UseState([]);

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((res) => res.json())
      .then((result) => {
        setBooks(result);
        console.log(books);
      });
  }, []);

  return (
    <div>
      {restaurantes.map(({ name, type, price }) => {
        <container>
          <h3>{name}</h3>
          <h5>{type}</h5>
          <h5>{price}</h5>
        </container>;
      })}
    </div>
  );
}

/* export default function Card() {
  return (
    <div className={Style.card}>
      <container className={Style.container}>
        <h3>Name</h3>
        <h5>Type</h5>
        <h5>Price</h5>
      </container>
    </div>
  );
} */
