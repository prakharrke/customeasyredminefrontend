import React, { Component } from 'react';
import { Input } from '@progress/kendo-react-inputs';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { Link, NavLink } from 'react-router-dom';
import * as Constants from '../Constants'
export default class LoginForm extends Component {
	constructor(props) {

		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}

	login(event) {
		axios.defaults.withCredentials = true;
		axios.defaults.crossDomain = true;
		axios.post(Constants.url + 'Authentication', `userDetails=${JSON.stringify({ username: this.state.username, password: this.state.password })}`, {
			crossDomain : true,
			withCredentials : true,
			headers: {
				

			}


		}).then(response => {
			console.log(response)
		})
	}
	setUserName(event) {
		this.setState({
			username: event.target.value
		})
	}
	setPassword(event) {
		this.setState({
			password: event.target.value
		})
	}

	render() {

		//var redirect = this.props.isUserAuthenticated ? <Redirect to={{ pathname: "/connections" }} /> : ''
		
		return (


			<div className="row justify-content-center align-items-center" style={{ height: "40em" }}>
				
				<div className="col-lg-4 align-items-center">
					<div className="card">
						<div className="card-block">
							<form className="k-form">
								<fieldset>
									<legend>Login:</legend>
									<div className="mb-3">
										<Input
											name="username"
											style={{ width: "100%" }}
											label="username"
											pattern={"[A-Za-z]+"}
											minLength={2}
											required={true}
											onChange={this.setUserName.bind(this)}
										/>
									</div>
									<div className="mb-3">
										<Input
											name="password"
											type="password"
											style={{ width: '100%' }}
											label="Password"
											required={true}
											onChange={this.setPassword.bind(this)}
										/>
									</div>
								</fieldset>
								<input type="button" className="k-button k-primary" value="Login" onClick={this.login.bind(this)} />
							</form>
						</div>
					</div>
					
				</div>
			</div>
		);
	}

}