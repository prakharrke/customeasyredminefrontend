import React, { Component } from 'react';
import { Button, ButtonGroup, SplitButton, SplitButtonItem, DropDownButton, DropDownButtonItem, Toolbar, ToolbarItem, ToolbarSeparator } from '@progress/kendo-react-buttons'
import { MultiSelect, AutoComplete, DropDownList } from '@progress/kendo-react-dropdowns';
import axios from 'axios';
import * as Constants from '../Constants'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import Loading from './Components/Loading'
import { BrowserRouter, Route, Router, HashRouter, Redirect, Switch } from 'react-router-dom';
import IssuesTable from './Components/IssuesTable'
import IssueDetails from './Components/IssueDetails'
export default class Issues extends Component{


	constructor(props){

		super(props);
		this.state={

		}
	}

	componentWillMount(){

		console.log("Issues")
		console.log(this.props)
	}

	render(){
		return(
			<div>
				<Switch>
					<Route path="/projects/:projectID?/issues/:issueID" render={props => {
						return (
							<IssueDetails {...props}/>
						)
					}} />

					<Route path="/projects/:projectID?/issues/" render={props => {
						return (
							<IssuesTable {...props}/>
						)
					}} />
					<Route path="/issues/:issueID" render={props => {
						return (
							<IssueDetails {...props}/>
						)
					}} />
					<Route path="/issues/" render={props => {
						return (
							<IssuesTable {...props}/>
						)
					}} />

				</Switch>
				
			</div>
			)
	}
}