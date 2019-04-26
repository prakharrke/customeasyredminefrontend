import React, { Component } from 'react';
import { Button, ButtonGroup, SplitButton, SplitButtonItem, DropDownButton, DropDownButtonItem, Toolbar, ToolbarItem, ToolbarSeparator } from '@progress/kendo-react-buttons'
import { MultiSelect, AutoComplete, DropDownList } from '@progress/kendo-react-dropdowns';
import axios from 'axios';
import * as Constants from '../../Constants'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import Loading from './Loading'
import { BrowserRouter, Route, Router, HashRouter, Redirect, Switch } from 'react-router-dom';

export default class IssuesTable extends Component{


	constructor(props){

		super(props);
		this.state={
			url : "",
			issues : [],
			isLoading : true
		}
	}

	componentDidMount(){

		console.log("Issues Table")
		console.log(this.props)
		var jwt = localStorage.getItem('jwt');
		if (jwt == null) {
			window.location.reload();
		}

		var url = this.props.match.url;
		axios.post(Constants.url + 'GetIssues', `url=${encodeURIComponent(url)}`, {

			headers: {
				'Authorization': 'Bearer ' + jwt
			}
		}).then(response => {
			this.setState({
				...this.state,
				issues : response.data.issues,
				isLoading : false
			})
		}).catch(e => {
			console.log(e)
			//localStorage.removeItem('jwt');
			//window.location.reload();
		})
	}

	static getDerivedStateFromProps(nextProps, prevProps) {

		
		return { url : nextProps.match.url }
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('********************')
		console.log(this.state)
		console.log(prevState)

		if (this.state.url !== prevState.url) {

			var jwt = localStorage.getItem('jwt');
		if (jwt == null) {
			window.location.reload();
		}

		var url = this.state.url;
		axios.post(Constants.url + 'GetIssues', `url=${encodeURIComponent(url)}`, {

			headers: {
				'Authorization': 'Bearer ' + jwt
			}
		}).then(response => {
			this.setState({
				...this.state,
				issues: response.data.issues,
				isLoading: false
			})
		}).catch(e => {
			console.log(e)
			//localStorage.removeItem('jwt');
			//window.location.reload();
		})
		}
	}

		render() {
		var loading = this.state.isLoading ? <Loading /> : ""


		return (
			<div>
				{loading}
				{
					!this.state.isLoading &&

					<div className="row justify-content-center">
						<div className="col-lg-10">
							<Grid
								data={this.state.issues}
							>
								<Column
									field="id"
									title="ID"

								/>
								<Column
									field="tracker.name"
									title="Tracker"

								/>
								<Column
									field="author.name"
									title="Author"
								/>
								<Column
									field="subject"
									title="Subject"
								/>
								<Column
									field="created_on"
									title="Created On"
								/>
								<Column
									field="updated_on"
									title="Updated On"
								/>
							</Grid>
						</div>
					</div>
				}
			</div>
		)
	}
}