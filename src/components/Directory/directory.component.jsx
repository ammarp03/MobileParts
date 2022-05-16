import DirectoryItem from "../directory-item/directory-item.components";
import "./directory.styles.jsx";
import { DirectoryContainer } from "./directory.styles.jsx";
const categories = [
	{
		id: 1,
		title: "SAMSUNG MOBILE PARTS",
		imageUrl:
			"https://img.global.news.samsung.com/global/wp-content/uploads/2021/01/Unpacked-2021-Camera-History_main_1.jpg",
		route: "shop/hats",
	},
	{
		id: 2,
		title: "APPLE MOBILE PARTS",
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROvI9XqNLVba2ZHUkZX12nlwjU2JDDgwGdkQ&usqp=CAU",
		route: "shop/jackets",
	},
	{
		id: 3,
		title: "HUAWEI MOBILE PARTS",
		imageUrl:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFhJjd9wkQ8WGFcz7ZcjAWBAJhv7Kf_L7nGw&usqp=CAU",
		route: "shop/sneakers",
	},
	{
		id: 4,
		title: "VIVO MOBILE PARTS",
		imageUrl:
			"https://www.xda-developers.com/files/2022/01/Vivo-X23-XDA-225553452424243-1024x683.jpg",
		route: "shop/womens",
	},
	{
		id: 5,
		title: "OPPO MOBILE PARTS",
		imageUrl: "https://i.ytimg.com/vi/zWeU0U-EUtA/maxresdefault.jpg",
		route: "shop/mens",
	},
];
const Directory = () => {
	return (
		<DirectoryContainer className="directory-container">
			{categories.map((category) => (
				<DirectoryItem key={category.id} category={category} />
			))}
		</DirectoryContainer>
	);
};

export default Directory;
