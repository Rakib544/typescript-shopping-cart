
import { Badge, Drawer, Grid, LinearProgress } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { Wrapper, StyledButton } from './App.styles';
import Cart from './Cart/Cart';
import Item from './Item/Item';

export type cartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const getProducts = async (): Promise<cartItemType[]> =>
  await (await fetch('https://fakestoreapi.com/products')).json();

const App = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as cartItemType[]);

  const { data, isLoading, error } = useQuery<cartItemType[]>(
    'products',
    getProducts
  );

  const getTotalItems = (items: cartItemType[]) => items.reduce((total: number, item) => total += item.amount, 0)

  const handleAddToCart = (clickedItem: cartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress></LinearProgress>

  if (error) return <div>Somethings went wrong..</div>
  return (
    <Wrapper>
      <Drawer anchor="right" open={isCartOpen} onClose={() => setIsCartOpen(false)}>
        <Cart cartItems={cartItems} addToCart={handleAddToCart} removeFromCart={handleRemoveFromCart}/>
      </Drawer>
      <StyledButton onClick={() => setIsCartOpen(true)}>
        <Badge badgeContent={getTotalItems((cartItems))} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {
          data?.map(item => (
            <Grid item key={item.id} xs={12} sm={4} md={3} lg={3}>
              <Item item={item} handleAddToCart={handleAddToCart} />
            </Grid>
          ))
        }
      </Grid>
    </Wrapper>
  );
}

export default App;
