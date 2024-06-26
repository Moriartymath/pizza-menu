import "./MenuItem.css";
import MenuItemDescription from "./MenuItemDescription/MenuItemDescription";
import MenuItemImage from "./MenuItemImage/MenuItemImage";

function MenuItem({ name, image, ingredients, price, soldOut }) {
  return (
    <div className={`item${soldOut ? " item--sold_out" : ""}`}>
      <MenuItemImage src={image} />
      <MenuItemDescription
        name={name}
        ingredients={ingredients}
        price={price}
        soldOut={soldOut}
      />
    </div>
  );
}

export default MenuItem;
