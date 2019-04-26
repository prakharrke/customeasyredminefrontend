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
		var jwt = localStorage.getItem('jwt');
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

		if (this.state.projectID !== prevState.projectID) {

			var jwt = localStorage.getItem('jwt');
		if (jwt == null) {
			window.location.reload();
		}

		var projectID = this.state.projectID;
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