import React, { Component } from 'react';

class Analysis extends React.Component{
    constructor(props){
	super();
	this.state = {
	    data: props.analysis
	};
    }
    
    render() {
	console.log(this.state.data);
	return(
	    <div>
	      <h2></h2>
	    </div>
	);
    } 
}

export default Analysis;
