import { currencyFormatter } from "../util/formatting.js";

export default function CartItem({
  quantity,
  price,
  name,
  onIncrement,
  onDecrement,
}) {
  return (
    <li className="cart-item">
      <p>
        {name} - {quantity} x {currencyFormatter.format(price)}
      </p>
      <p className="cart-item-actions">
        <button onClick={onDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={onIncrement}>+</button>
      </p>
    </li>
  );
}
