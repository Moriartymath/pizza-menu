import React from "react";
import "./MenuItemDescription.css";
import MenuItemIngridients from "./MenuItemIngridients/MenuItemIngridients";
import MenuItemPrice from "./MenuItemPrice/MenuItemPrice";
import MenuItemTitle from "./MenuItemTitle/MenuItemTitle";

function MenuItemDescription({ name, ingredients, price, soldOut }) {
  return (
    <div className="description--container">
      <MenuItemTitle title={name} />
      <MenuItemIngridients ingredients={ingredients} />
      {soldOut ? (
        <h3 style={{ fontFamily: "monospace", fontSize: "1.2rem" }}>
          SOLD OUT
        </h3>
      ) : (
        <MenuItemPrice price={price} />
      )}
    </div>
  );
}

export default MenuItemDescription;
