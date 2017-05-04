module.exports = {
	"parser": "babel-eslint",

	parserOptions: {
		"ecmaFeatures": {
			"jsx": true,
			"modules": true
		}
	},
	"env": {
		"browser": true
	},
	"extends": "eslint:recommended",
	"rules": {
		"brace-style": [1, "stroustrup"],
		"curly": 1,
		"eqeqeq": 1,
		"indent": [2, "tab", {"SwitchCase": 1}],
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],
		"no-undef": [0],
		"semi": [1, "always"],
		"space-infix-ops": [1, {"int32Hint": false}],
		"quotes": [1, "double"]
	}
}
