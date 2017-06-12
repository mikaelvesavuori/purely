import React from "react";
import ReactDOM from "react-dom";

// Import containers
import Routes from "routes/index";

// Import the SCSS if you'd rather use PostCSS/CSSnext/Sass
//import "./../styles/main.scss";

import * as firebase from "firebase";

var config = {
	apiKey: "AIzaSyDQ9uQx0sKCBWcXet8AahGhhZZ0mMwaeNo",
	authDomain: "web-quickstart-97d3c.firebaseapp.com",
	databaseURL: "https://web-quickstart-97d3c.firebaseio.com",
	projectId: "web-quickstart-97d3c",
	storageBucket: "web-quickstart-97d3c.appspot.com",
	messagingSenderId: "423214251834"
};
//const fb = firebase.initializeApp(config).database().ref();
firebase.initializeApp(config);

import AppWrapper from "./AppWrapper";
import Header from "components/Header";

const dbRef = firebase.database().ref().child("books");
//firebase.database().ref().child("books").once("value");

class Main extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			headerTitle: "",
			books: []
		};

		//this.getBooks = this.getBooks.bind(this);
	}

	getHeaderTitle() {
		firebase.database().ref().child("header").once("value").then((snapshot) => {
			this.setState({
				headerTitle: snapshot.val()
			});
		});
	}

	componentDidMount() {
		//this.getHeaderTitle();
		this.getBooks();
	}

	getBooks() {
		//dbRef.on("value", (snapshot) => {
		dbRef.once("value").then((snapshot) => {
			let items = snapshot.val();
			let newState = [];
			for (let item in items) {
				newState.push({
					id: item,
					title: items[item].title,
					author: items[item].author
				});
				console.log(item, items[item].title, items[item].author);
			}
			//this.setState({
			//	books: newState
			//});
		});
	}

	render() {
		//const displayBooks = this.state.books.map((book) =>
		//	<p>{book}</p>
		//);

		return (
			<AppWrapper>
				<Header text={this.state.books} />
				<Routes />
			</AppWrapper>
		);
	}
}

export default Main;
