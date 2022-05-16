import "./cart-dropdown.styles.jsx";
import Button from "../Button/button.components";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../cart-item/cart-item.components";
import {
	CartDropdownContainer,
	EmptyMessage,
	CartItems,
} from "./cart-dropdown.styles";
import { useNavigate } from "react-router-dom";
const CartDropdown = () => {
	const { cartItems } = useContext(CartContext);

	const navigate = useNavigate();

	const checkButton = () => {
		return navigate("/checkout");
	};
	return (
		<CartDropdownContainer>
			<CartItems>
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your cart is Empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={checkButton}>CHECKOUT</Button>
		</CartDropdownContainer>
	);
};
export default CartDropdown;
