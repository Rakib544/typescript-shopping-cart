import { cartItemType } from "../App";
import { Wrapper } from "../App.styles";
import CartItems from "../CartItem/CartItems";

type Props = {
    cartItems: cartItemType[];
    addToCart: (clickedItem: cartItemType) => void;
    removeFromCart: (id: number) => void;
}

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart}) => {
    return (
        <Wrapper>
            <h2>Your Shopping Cart</h2>
            {
                cartItems.length === 0 ? <p>No items in Cart.</p> : null
            }
            {
                cartItems.map(item => (
                    <CartItems 
                        key={item.id}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart = {removeFromCart}
                    />
                ))
            }
        </Wrapper>
    )

}

export default Cart;