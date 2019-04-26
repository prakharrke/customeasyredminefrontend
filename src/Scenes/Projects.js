import React, { Component } from 'react';
import { Button, ButtonGroup, SplitButton, SplitButtonItem, DropDownButton, DropDownButtonItem, Toolbar, ToolbarItem, ToolbarSeparator } from '@progress/kendo-react-buttons'
import { MultiSelect, AutoComplete, DropDownList } from '@progress/kendo-react-dropdowns';
import axios from 'axios';
import * as Constants from '../Constants'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import Loading from './Components/Loading'
import { BrowserRouter, Route, Router, HashRouter, Redirect, Switch } from 'react-router-dom';
import Issues from './Issues'
import ProjectsTable from './Components/ProjectsTable'
import ProjectDetails from './Components/ProjectDetails'
export default class Projects extends Component{


	constructor(props){

		super(props);
		this.state={

		}
	}

	componentWillMount(){

		console.log("Projects")
		console.log(this.props)
	}

	render(){
		return(
			<div>
				<Switch>

					

					<Route path="/projects/:projectID?/issues/:issueID?" render={props => {
						return (
							<Issues {...props}/>
						)
					}} />
					<Route path="/projects/:projectID" render={props => {
						return (
							<ProjectDetails {...props}/>
						)
					}} />
					<Route path="/projects/" render={props => {
						return (
							<ProjectsTable {...props}/>
						)
					}} />
				</Switch>

			</div>
			)
	}
}