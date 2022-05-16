import { Fragment, useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.components";
import { CategoriesContext } from "../../contexts/categories.context";

const CategoriesPreview = () => {
	const { categoriesMap } = useContext(CategoriesContext);

	return (
		<Fragment>
			{Object.keys(categoriesMap).map((title) => {
				const products = categoriesMap[title];

				return (
					<CategoryPreview key={title} title={title} products={products} />
				);
			})}
		</Fragment>
	);
};

export default CategoriesPreview;
// {products.map((product) => (
// 	<ProductCard key={product.id} product={product} />
// ))}
// const products = categoriesMap['hats']
// console.log(products);
