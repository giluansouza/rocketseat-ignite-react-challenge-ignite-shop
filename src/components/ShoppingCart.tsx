import { useShoppingCart } from "use-shopping-cart";
import CartItem from "./CartItem";
import CheckoutButton from "./CheckoutButton";
import { ButtonClose, CartItemsList, ShoppingCartContainer } from "../styles/components/shoppingCart";
import { X } from "phosphor-react";

export default function ShoppingCart() {
  const { shouldDisplayCart, cartCount, cartDetails, totalPrice } = useShoppingCart();
  return (
    <ShoppingCartContainer>
      <ButtonClose>
        <X size={16} />
      </ButtonClose>
      
        {cartCount && cartCount > 0 ? (
          <>
            <CartItemsList>
              <strong>Seu carrinho</strong>
              {Object.values(cartDetails ?? {}).map((entry) => (
                <CartItem key={entry.id} item={entry} />
              ))}
            </CartItemsList>
            <div>
              <span>Quantidade {cartCount}</span>
              <span>Valor total {totalPrice}</span>
            </div>
            <CheckoutButton />
          </>
        ) : (
          <h3>Você não tem itens no carrinho!</h3>
        )}
    </ShoppingCartContainer>
  );
}
