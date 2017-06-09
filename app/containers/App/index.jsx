import React from "react";
import { connect } from "react-redux";

import * as actions from "actions/actions";

import Main from "components/Main";

const App = connect()(Main);
export default App;
