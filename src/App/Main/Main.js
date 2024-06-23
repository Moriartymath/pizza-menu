import Header from "../Header/Header";
import "./Main.css";
import MenuList from "./MenuList/MenuList";
import Order from "./Order/Order";
import React from "react";

function Main() {
  return (
    <main className="main">
      <Header
        element={[
          <h2 className="menu--title">OUR MENU</h2>,
          <p className="description">Authenic japanese cuisine</p>,
        ]}
      />
      <MenuList />
      <Order />
    </main>
  );
}

export default Main;
