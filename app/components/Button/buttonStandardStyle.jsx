import { css } from "styled-components";

const buttonStandardStyle = css`
	display: block;
	width: ${props => props.small ? "33%" : "100%"};
	height: 40px;
	margin: 0 auto;
	margin-bottom: 2rem;
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

export default buttonStandardStyle;
