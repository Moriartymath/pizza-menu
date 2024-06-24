import "./MenuItemImage.css";

function MenuItemImage({ src }) {
  console.log(src);
  return (
    <div className="image--container">
      <img src={src} alt="pizza" className="item--image"></img>
    </div>
  );
}

export default MenuItemImage;
