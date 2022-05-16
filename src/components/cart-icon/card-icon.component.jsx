import {ShoppingIcon,ItemCount,CartIconContainer} from "./cart-icon.styles";

import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";

const CartIcon = () => {
	const { isCartOpen, setisCartOpen , cartCount} = useContext(CartContext);
	const quantity = {}

	const toggleIsCartOpen = () => {
		setisCartOpen(!isCartOpen);
		
		// 	}
	};
	return (
		<CartIconContainer onClick={toggleIsCartOpen}>
			<ShoppingIcon  />
			<ItemCount >{cartCount}</ItemCount>
		</CartIconContainer>
	);
};
export default CartIcon;
