import React from "react";
import PropTypes from "prop-types";

import Sidebar from "containers/Sidebar";

class sidebar extends React.Component {
	render() {
		return (
			<Sidebar>
				{this.props.text}
			</Sidebar>
		);
	}
}

sidebar.propTypes = {
	text: PropTypes.string
};

export default sidebar;

/*
const sidebar = () =>
	<div>
		<Sidebar>
			Sidebar asdas dasö dkaslkd jaöoid höash.
		</Sidebar>
	</div>;
*/
