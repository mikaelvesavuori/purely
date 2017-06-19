import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

class Products extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<h1>Products</h1>

				{this.props.products.map(product => {
					return <p><a href="">{product.fields.productName} – {product.fields.price} $</a></p>;
				})}
			</div>
		);
	}
}

Products.propTypes = {
	products: React.PropTypes.any
};

export default Products;
