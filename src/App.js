import React, { Component } from 'react';
import './App.css';
import TextSubmission from './TextSubmission';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

class App extends Component {

    render() {
	const transitionOptions = {
	    transitionName: "fade",
	    transitionEnterTimeout: 500,
	    transitionLeaveTimeout: 500
	};

	return(
	    <ReactCSSTransitionGroup {...transitionOptions}>
	      <TextSubmission />
	    </ReactCSSTransitionGroup>
	);
    }
};


export default App;
