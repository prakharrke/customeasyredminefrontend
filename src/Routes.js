import React, { Component } from 'react';
import { BrowserRouter, Route, Router, HashRouter, Redirect, Switch } from 'react-router-dom';
import LoginForm from './Scenes/LoginForm'
import axios from 'axios';
import * as Constants from './Constants'
import Home from './Scenes/Home'
const PrivateRoute = ({ component: Component, ...rest }) => {

	console.log(rest)

	return (
		<Route  {...rest} render={props => (

			rest.isAuthenticated ? (
				<Component {...props} />
			) : (
					<Redirect to={{
						pathname: "/login",

					}} />
				)
		)} />);
}


export default class Routes extends Component{
	constructor(props){
		super(props);
		this.state={

			isAuthenticated : false
		}
	}

	componentWillMount(){
		axios.post(Constants.url + 'Authentication', `userDetails=${JSON.stringify({ username: "", password:"" })}`, {
			headers: {
			}


		}).then(response=>{
			console.log(response.data);

		})
	}

		render() {

		return (

			<HashRouter basename="/customeasyredmine" >

				<Switch>
				<Route  path='/login' render={props=>{return (<LoginForm isUserAuthenticated={this.state.isUserAuthenticated} />)}} />
				<PrivateRoute isAuthenticated={this.state.isUserAuthenticated} path='/' component = {Home}/>
				</Switch>
			</HashRouter>

		)
	}
}