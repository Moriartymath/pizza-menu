import Header from "../Header/Header";
import "./Main.css";
import MenuList from "./MenuList/MenuList";
import Order from "./Order/Order";
import React from "react";

function Main() {
  const descriptionText = `Authentic Italian cuisine. 6 creative dishes to choose from.All from
  our stone oven, all organic, all delicious.`;
  return (
    <main className="main">
      <Header
        element={[
          <h2 key={1} className="menu--title">
            OUR MENU
          </h2>,
          <p key={2} className="description">
            {descriptionText}
          </p>,
        ]}
      />
      <MenuList />
      <Order />
    </main>
  );
}

export default Main;
