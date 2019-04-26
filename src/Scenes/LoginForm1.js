import React, { Component } from 'react';
import { Input } from '@progress/kendo-react-inputs';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import * as Constants from '../Constants'
	var htmlDoc = null;
export default class LoginForm1 extends Component{
	
	constructor(props){
		super(props);
		this.state={
			loginForm : "<div></div>"
		}
	}

	componentWillMount(){
		axios.get(Constants.url + 'GetLoginPage')
		.then(response=>{
			console.log(response.data)
			var parser = new DOMParser();
			 htmlDoc = parser.parseFromString(response.data, 'text/html');
			 var value = htmlDoc.getElementsByName('authenticity_token')
			console.log(value[0].value)
		})
	}

	render(){

		return (
				htmlDoc
			)

	}

}