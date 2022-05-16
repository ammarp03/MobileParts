import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.components";
import CategoryRoutes from "../category/category.components";

import "./shop.styles.scss";
const Shop = () => {
	return (
		<Routes>
			<Route index element={<CategoriesPreview/>} />
			<Route path=":category" element={<CategoryRoutes/>} />
		</Routes>
	);
};

export default Shop;
// {products.map((product) => (
// 	<ProductCard key={product.id} product={product} />
// ))}
