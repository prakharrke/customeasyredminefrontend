import React, { Component } from 'react';
import { Button, ButtonGroup, SplitButton, SplitButtonItem, DropDownButton, DropDownButtonItem, Toolbar, ToolbarItem, ToolbarSeparator } from '@progress/kendo-react-buttons'
import { MultiSelect, AutoComplete, DropDownList } from '@progress/kendo-react-dropdowns';
import axios from 'axios';
import * as Constants from '../../Constants'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import Loading from './Loading'
export default class ProjectIssues extends Component {

	constructor(props) {
		super(props)

		this.state = {
			projectID: '',
			issues: [],
			isLoading: true
		}
	}

	componentDidMount() {
		/*var jwt = localStorage.getItem('jwt');
		if (jwt == null) {
			window.location.reload();
		}

		var projectID = this.props.match.params.id;
		axios.post(Constants.url + 'GetProjectIssues', `projectID=${encodeURIComponent(projectID)}`, {

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
		})*/

	var projectID = this.props.match.params.id;
	alert(projectID)
		axios.get(Constants.url + projectID, {

			headers: {
				'ws_token': 'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJpYXQiOjE1NTc0OTMwODEsImlzcyI6ImVxdWJlbWkiLCJzdWIiOiJwcmFraGFyIiwiYXVkIjoiZXF1YmVtaSIsInRfdHlwZSI6InVzZXItdG9rZW4iLCJpcF9hZHIiOiIxOTIuMTY4LjQyLjQzIiwic3Nfbm9kZSI6IkRUMDEwNzAxNTMudGVjaG5vbG9naWMuY29tXzgxODEiLCJhX3Rva2VuIjoiU1QtaEtvT3ZGVjdFWURxTUpqYjlnNnkiLCJ1cm4iOiIvZVFTZXJ2aWNlR2F0ZXdheS9BUEkvTG9naW5TZXJ2aWNlL2xvZ2luIiwidWFndCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83NC4wLjM3MjkuMTMxIFNhZmFyaS81MzcuMzYifQ.UozJGc1d1FVuj1RJa-RT79oxDmoHNKS0NNoSbBgT_jh9-MAVBWy7GBKBcpVy2FeAW8MtCMq-S9_Myz5Zd37NSg',
				'Content-Type' : 'text/plain' 
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

	static getDerivedStateFromProps(nextProps, prevProps) {

		console.log('%%%%%%%%')
		console.log(prevProps)
		console.log(nextProps)
		return { projectID : nextProps.match.params.id }
	}

	componentDidUpdate(prevProps, prevState) {
		console.log('********************')
		console.log(this.state)
		console.log(prevState)

	/*	if (this.state.projectID !== prevState.projectID) {

			var jwt = localStorage.getItem('jwt');
		if (jwt == null) {
			window.location.reload();
		}
	
		
		axios.post(Constants.url + 'GetProjectIssues', `projectID=${encodeURIComponent(projectID)}`, {

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
		})*/
		var projectID = this.state.projectID;
		alert(projectID)
		axios.get(Constants.url + projectID,  {

			headers: {
				'WS_TOKEN': 'eyJ0eXBlIjoiSldUIiwiYWxnIjoiSFM1MTIifQ.eyJpYXQiOjE1NTc0OTMwODEsImlzcyI6ImVxdWJlbWkiLCJzdWIiOiJwcmFraGFyIiwiYXVkIjoiZXF1YmVtaSIsInRfdHlwZSI6InVzZXItdG9rZW4iLCJpcF9hZHIiOiIxOTIuMTY4LjQyLjQzIiwic3Nfbm9kZSI6IkRUMDEwNzAxNTMudGVjaG5vbG9naWMuY29tXzgxODEiLCJhX3Rva2VuIjoiU1QtaEtvT3ZGVjdFWURxTUpqYjlnNnkiLCJ1cm4iOiIvZVFTZXJ2aWNlR2F0ZXdheS9BUEkvTG9naW5TZXJ2aWNlL2xvZ2luIiwidWFndCI6Ik1vemlsbGEvNS4wIChXaW5kb3dzIE5UIDEwLjA7IFdpbjY0OyB4NjQpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS83NC4wLjM3MjkuMTMxIFNhZmFyaS81MzcuMzYifQ.UozJGc1d1FVuj1RJa-RT79oxDmoHNKS0NNoSbBgT_jh9-MAVBWy7GBKBcpVy2FeAW8MtCMq-S9_Myz5Zd37NSg' 
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