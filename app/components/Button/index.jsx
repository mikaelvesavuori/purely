import React from "react";
import PropTypes from "prop-types";

import ButtonStandard from "./ButtonStandard";

class Button extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				{this.props.small ? (
					<ButtonStandard small>
						{this.props.text}
					</ButtonStandard>
				) : (
					<ButtonStandard>
						{this.props.text}
					</ButtonStandard>)
				}
			</div>
		);
	}
}

Button.propTypes = {
	text: PropTypes.string.isRequired,
	small: PropTypes.boolean
};

export default Button;
