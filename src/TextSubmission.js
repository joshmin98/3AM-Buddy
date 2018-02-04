import React, { Component } from 'react';
import { Form, Input, Label, FormGroup } from 'reactstrap';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

var sentiment = require('sentiment');

class TextSubmission extends Component {
    constructor(props) {
	super(props);
	this.state = {value: '',
		      analysis: {}};
    }

    handleChange(event) {
	this.setState({value: event.target.value});
    }

    handleSubmit(event) {
	this.setState({analysis: sentiment(this.state.value)});
	event.preventDefault();
    }

    render() {
	var currentState = this.state.analysis;
	var scoreVal = null;;
	if (this.state.value != '') {
	  scoreVal = currentState.score;
	}
	var outputMessage = null;
	if (scoreVal < 0 && this.state.value != '') {
	    outputMessage = "You probably shouldn't send that. But I'm only about 70% sure!";
	} else if (scoreVal > 0 && this.state.value != '') {
	    outputMessage = "Looks alright to us!";
	} else if (scoreVal === 0 && this.state.value != ''){
	    outputMessage = "Hmm... I'm not too sure about that one. Your call!";
	} 
	return (
	    <div className="App">
	      <Form onSubmit={this.handleSubmit.bind(this)}>
		<FormGroup>
		  <Label>
		    <Input bsSize="lg" type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
		  </Label>
		</FormGroup>
		<AwesomeButton type="primary" size="large" value="Submit" >Should I send this?</AwesomeButton>
	      </Form>
	      <br />
	      <span>
		<h5>{scoreVal}</h5>
		<h5>{outputMessage}</h5>
	      </span>
	      
	    </div>
	);
    }
}

export default TextSubmission;
