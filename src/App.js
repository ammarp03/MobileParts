import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigations/navigations-component";
import Home from "./routes/home/home.components";
import Shop from "./routes/shop/shop.components";
import Authentications from "./routes/authentications/authentications.components";
import CheckOut from "./components/checkout/checkOut.components";
const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Navigation />}>
				<Route index element={<Home />} />
				<Route path="shop/*" element={<Shop />} />
				<Route path="auth" element={<Authentications />} />
				<Route path="checkout" element={<CheckOut />} />
				
			</Route>
		</Routes>
	);
};
export default App;
