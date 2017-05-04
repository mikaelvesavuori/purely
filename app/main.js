import "./main.scss";

if (process.env.NODE_ENV === "development") {
	require("file-loader!index.html");
}
