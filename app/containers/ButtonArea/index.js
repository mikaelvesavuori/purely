import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonArea = styled.div`
	width: 100%;
	margin-top: 5rem;
	padding: 0;
`;

ButtonArea.propTypes = {
	children: PropTypes.node,
};

export default ButtonArea;
