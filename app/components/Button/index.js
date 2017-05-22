import React from "react";
import styled from "styled-components";

const Button = styled.button`
	display: block;
	width: ${props => props.small ? "auto" : "33%"};
	height: 40px;
	margin: 0 auto;
	border-radius: 3px;
	font-size: 1.5rem;
	text-align: center;
	color: rgb(255, 255, 255);
	background-color: rgb(80, 80, 200);
	transition: .25s;

	&:hover {
		color: rgb(200, 200, 200);
		transition: .25s;
	}
`;

export default Button;
