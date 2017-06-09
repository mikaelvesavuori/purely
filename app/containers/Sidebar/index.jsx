import React from "react";
import PropTypes from "prop-types";

import SidebarSmall from "containers/Sidebar/SidebarSmall";
import Links from "components/Links";

class Sidebar extends React.Component {
	render() {
		return (
			<SidebarSmall>
				<Links />
			</SidebarSmall>
		);
	}
}

Sidebar.propTypes = {
	text: PropTypes.string
};

export default Sidebar;
