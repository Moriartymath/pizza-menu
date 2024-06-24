import "./MenuItemDescription.css";
import MenuItemIngridients from "./MenuItemIngridients/MenuItemIngridients";
import MenuItemPrice from "./MenuItemPrice/MenuItemPrice";
import MenuItemTitle from "./MenuItemTitle/MenuItemTitle";

function MenuItemDescription({ name, ingredients, price }) {
  return (
    <div className="description--container">
      <MenuItemTitle title={name} />
      <MenuItemIngridients ingredients={ingredients} />
      <MenuItemPrice price={price} />
    </div>
  );
}

export default MenuItemDescription;
