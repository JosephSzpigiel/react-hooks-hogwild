import React from "react";
import Nav from "./Nav";
import Main from "./Main"

import hogs from "../porkers_data";

function App() {
	return (
		<div className="App">
			<Nav />
			<Main hogs={hogs}/>
		</div>
	);
}

export default App;

// Create Tiles for each hog with name and image
//When clicked on, display additional information
// Filter hogs that are greased
// sort hogs by name and weight
