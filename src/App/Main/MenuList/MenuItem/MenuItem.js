import "./MenuItem.css";
import MenuItemDescription from "./MenuItemDescription/MenuItemDescription";
import MenuItemImage from "./MenuItemImage/MenuItemImage";

function MenuItem({ name, image, ingredients, price }) {
  return (
    <div className="item">
      <MenuItemImage src={image} />
      <MenuItemDescription
        name={name}
        ingredients={ingredients}
        price={price}
      />
    </div>
  );
}

export default MenuItem;
