import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import CartIcon from "../../components/cart-icon/card-icon.component";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import {
	NavigationContainer,
	NavLink,
	NavLinks,
	LogoContainer,
} from "./navigation.styles.jsx";
import { signOutUser } from "../../utils/firebase.utils";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

const Navigation = () => {
	const { currentUser } = useContext(UserContext);
	const { isCartOpen } = useContext(CartContext);

	return (
		<Fragment>
			<NavigationContainer>
				<LogoContainer to="/">
					<CrwnLogo className="logo" />
				</LogoContainer>

				<NavLinks>
					<NavLink className="nav-link" to="/shop">
						SHOP
					</NavLink>
					{currentUser ? (
						<NavLink as="span" onClick={signOutUser}>
							SIGN OUT
						</NavLink>
					) : (
						<NavLink className="nav-link" to="/auth">
							SIGN IN
						</NavLink>
					)}
					<CartIcon />
				</NavLinks>
				{isCartOpen && <CartDropdown />}
			</NavigationContainer>

			<Outlet />
		</Fragment>
	);
};
export default Navigation;
