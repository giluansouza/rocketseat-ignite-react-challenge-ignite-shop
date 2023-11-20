import { useShoppingCart } from "use-shopping-cart";
import Image from "next/image";
import { CartImage, CartItemContainer } from "../styles/components/cartItem";

export default function CartItem({ item }) {
  const { name, imageUrl, quantity, price } = item;
  const { removeItem } = useShoppingCart();

  const removeItemFromCart = () => {
    removeItem(item.id);
  };

  return (
    <CartItemContainer>
      <CartImage>
        <Image src={imageUrl} width={94} height={94} alt="" />
      </CartImage>
      <div>
        <span>{name}</span>
        <span>{price}</span>
        <button onClick={() => removeItemFromCart()}>
          remover
        </button>
      </div>
    </CartItemContainer>
  );
}
