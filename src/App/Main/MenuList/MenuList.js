import { useEffect, useState } from "react";
import MenuItem from "./MenuItem/MenuItem";
import "./MenuList.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function MenuList() {
  const [pizzaArr, setData] = useState([]);
  useEffect(() => {
    setData((arr) => {
      const readyData = pizzaData.map((pizza, index) => {
        const { name, ingredients, photoName, price } = pizza;
        return (
          <MenuItem
            key={index}
            name={name}
            image={photoName}
            ingredients={ingredients}
            price={price}
          />
        );
      });
      return readyData;
    });
  }, []);
  return (
    <div className="menu--list">
      {!pizzaArr.length ? <h2>Getting Data for you...</h2> : pizzaArr}
    </div>
  );
}

export default MenuList;
