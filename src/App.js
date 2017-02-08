import React, { Component } from 'react';
import logo from './logo.svg';
import './App.js';

import {Todo} from './Todo.js';

class App extends Component {
  render() {
    return (
      <div className="App">
     	 <div className="container">
 			<div className="row">
 				<div className="col-md-3">
        			<Todo buttonColor="red"/>
     			 </div>
     			 <div className="col-md-6">
     			 	<Todo buttonColor="green"/>
     			 </div>
 				 <div className="col-md-3">
 					<Todo buttonColor="blue"/>
					</div>
 				 </div>
 			</div>
 		</div>
    );
  }
}

export default App;
