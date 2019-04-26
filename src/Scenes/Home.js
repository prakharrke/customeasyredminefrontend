import React, { Component } from 'react';
import { Button, ButtonGroup, SplitButton, SplitButtonItem, DropDownButton, DropDownButtonItem, Toolbar, ToolbarItem, ToolbarSeparator } from '@progress/kendo-react-buttons'
import { MultiSelect, AutoComplete, DropDownList } from '@progress/kendo-react-dropdowns';
import axios from 'axios';
import * as Constants from '../Constants'
import { BrowserRouter, Route, Router, HashRouter, Redirect, Switch } from 'react-router-dom';
import ProjectIssues from './Components/ProjectIssues'
import Projects from './Projects'
export default class Home extends Component {

	constructor(props) {
		super(props)
		this.state = {
			searchProjects: []
		}
	}


	autoCompleteProjects(event) {

		console.log(event.filter.value)
		var searchString = event.filter.value;
		var jwt = localStorage.getItem('jwt');
		if (jwt == null) {
			window.location.reload();
		}
		axios.post(Constants.url + 'AutoCompleteProjects', `autoCompleteString=${encodeURIComponent(searchString)}`,
			{
				headers: {
					'Authorization': 'Bearer ' + jwt
				}
			}).then(response => {
				var searchProjects = response.data.projects;
				this.setState({
					...this.state,
					searchProjects: searchProjects
				})
			}).catch(e => {

				console.log(e);
				localStorage.removeItem('jwt')
				window.location.reload();
			})
	}

	selectProject(event) {
		console.log(event.target.value);
		var idArray = event.target.value.id.split('/');
		var id = idArray[idArray.length-1];

		this.props.history.push('/projects/' + id + '/issues')
	}
	render() {
		console.log('asd')
		console.log(this.props)
		return (
			<div>
				<div className="row" style={{ margin: '1em' }}>
					<div className="col-lg-12">


						<div className="row d-flex justify-content-between" style={{ borderRadius: '2' }}>
							<div className='col-lg-2' style={{ marginTop: '1em' }}><Button style={{ float: 'left' }}>Menu</Button></div>
							<div className='col-lg-8' style={{ marginTop: '1em' }}>
								<DropDownList
									data={this.state.searchProjects}
									dataItemKey="id"
									textField="value"
									style={{ width: '100%' }}
									label="Search Projects"
									filterable={true}
									onFilterChange={this.autoCompleteProjects.bind(this)}
									onChange={this.selectProject.bind(this)}
								>

								</DropDownList>
							</div>
							<div className='col-lg-2' style={{ marginTop: '1em' }}><Button>Logout</Button></div>
						</div>



					</div>
				</div>
				<Switch>
					{/*<Route path="/projecttasks/:id" render={props => {
											return (
												<ProjectIssues {...props}/>
											)
										}} /> */}

					<Route path="/projects/:projectID?" render={props => {
						return (
							<Projects {...props}/>
						)
					}} />
				</Switch>
			</div>
		)
	}
}