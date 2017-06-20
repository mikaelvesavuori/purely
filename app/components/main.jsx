import React from "react";
import ReactDOM from "react-dom";
import * as contentful from "contentful";

// Import containers
import Routes from "routes/index";
import Products from "components/Products";

// Import the SCSS if you"d rather use PostCSS/CSSnext/Sass
//import "./../styles/main.scss";

import AppWrapper from "./AppWrapper";
import Header from "components/Header";

const API_SPACE_ID = "650mcoaglyg0";
const API_KEY = "ff77ee50877b1197c61a4baeea61b7da6d3d3a47667ba9da7c7b770e9d7a1258";

const client = contentful.createClient({
	space: API_SPACE_ID,
	accessToken: API_KEY
});

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			products: []
		};

		this.getAllProducts = this.getAllProducts.bind(this);
	}

	getAllProducts() {
		client.getEntries({
			"content_type": "2PqfXUJwE8qSYKuM0U6w8M" // Matches "products"
		})
		.then((entries) => {
			const products = [];

			entries.items.forEach((entry) => {
				if (entry.fields.price) {
					products.push(entry);
				}
			});

			this.setState({
				products: products
			});
		});
	}

	componentDidMount() {
		this.getAllProducts();
	}

	render() {
		const products = this.state.products;

		return (
			<AppWrapper>
				<Header text="Header" />
				<Routes />
				<Products products={products} />
			</AppWrapper>
		);
	}
}

export default Main;
