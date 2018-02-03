import React, { Component } from 'react';
import { Form, Input, Label, Button, FormGroup } from 'reactstrap';

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
	return (
	    <div className="App">
	      <Form onSubmit={this.handleSubmit.bind(this)}>
		<FormGroup>
		  <Label>
		    <Input bsSize="lg" type="text" value={this.state.value} onChange={this.handleChange.bind(this)} />
		  </Label>
		</FormGroup>
		<Button type="submit" value="Submit" >Submit</Button>
	      </Form>
	      <br />
	      <h4>{JSON.stringify(this.state.analysis)}</h4>
	    </div>
	);
    }
}

export default TextSubmission;
