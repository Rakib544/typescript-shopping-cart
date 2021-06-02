
import { Button } from '@material-ui/core';
import { cartItemType } from '../App';

type Props = {
    item: cartItemType;
    addToCart: (clickedItem: cartItemType) => void;
    removeFromCart: (id: number) => void;
}

const CartItems: React.FC<Props> = ({item, addToCart, removeFromCart}) => (
    <div>
        <h3>{item.title}</h3>
        <div className="information">
            <p>Price: ${item.price}</p>
            <p>Total: ${(item.amount * item.price).toFixed(2)}</p>
        </div>
        <div className="buttons">
            <Button 
                size="small"
                disableElevation
                variant="contained"
                onClick={() => removeFromCart(item.id)}
            > - </Button>
            <p>{item.amount}</p>
            <Button 
                size="small"
                disableElevation
                variant="contained"
                onClick={() => addToCart(item)}
            > + </Button>
        </div>
        <img src={item.image} alt={item.title} />
    </div>
)


export default CartItems;