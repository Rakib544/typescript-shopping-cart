

// Types 
import { Button } from '@material-ui/core';
import { cartItemType } from '../App';
//styles
import { Wrapper } from './Item.styles';

type Props = {
    item: cartItemType;
    handleAddToCart: (clickedItem: cartItemType) => void;
}

const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3>{item.title}</h3>
            <p>{item.description.length > 100 ? item.description.slice(1, 100) : item.description}...</p>
            <h3>$ {item.price}</h3>
        </div>
        <div>
            <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
        </div>
    </Wrapper>
)

export default Item;