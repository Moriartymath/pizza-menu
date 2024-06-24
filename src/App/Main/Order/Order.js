import "./Order.css";
import OrderButton from "./OrderButton/OrderButton";
import OrderCaption from "./OrderCaption/OrderCaption";

function Order() {
  return (
    <div className="order--container">
      <OrderCaption />
      <OrderButton />
    </div>
  );
}

export default Order;
