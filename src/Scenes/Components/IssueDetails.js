import React, { Component } from 'react';
import { Button, ButtonGroup, SplitButton, SplitButtonItem, DropDownButton, DropDownButtonItem, Toolbar, ToolbarItem, ToolbarSeparator } from '@progress/kendo-react-buttons'
import { MultiSelect, AutoComplete, DropDownList } from '@progress/kendo-react-dropdowns';
import axios from 'axios';
import * as Constants from '../../Constants'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import Loading from './Loading'
import { BrowserRouter, Route, Router, HashRouter, Redirect, Switch } from 'react-router-dom';
import { Input, NumericTextBox } from '@progress/kendo-react-inputs';
import { TabStrip, TabStripTab } from '@progress/kendo-react-layout';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import IssueComments from './IssueComments'
export default class IssueDetails extends Component {


	constructor(props) {

		super(props);
		this.state = {
			url: '',
			issueDetails: null,
			selected: 0
		}
	}

	componentDidMount() {

		/*
		console.log("Issue Details")
		console.log(this.props)
		var jwt = localStorage.getItem('jwt');
		if (jwt == null) {
			//window.location.reload();
		}

		var url = this.props.match.url;
		if (url.endsWith('/'))
			url = url.substring(0, url.length - 1)
		url = url + ".json?include=journals,attachments"
		axios.post(Constants.url + 'GetIssueDetails', `url=${encodeURIComponent(url)}`, {

			headers: {
				'Authorization': 'Bearer ' + jwt
			}
		}).then(response => {
			console.log(response.data.issue)
			this.setState({
				...this.state,
				issueDetails: { ...response.data.issue },
				isLoading: false
			})
		}).catch(e => {
			console.log(e)
			//localStorage.removeItem('jwt');
			//window.location.reload();
		})
		*/
		var url = this.props.match.url;
		if (url.endsWith('/'))
			url = url.substring(0, url.length - 1)
		url = url + ".json?include=journals,attachments"
		axios.post(Constants.url + 'GetIssueDetails', `url=${encodeURIComponent(url)}`, {

			headers: {
				
			}
		}).then(response => {
			console.log(response.data.issue)
			this.setState({
				...this.state,
				issueDetails: { ...response.data.issue },
				isLoading: false
			})
		}).catch(e => {
			console.log(e)
			//localStorage.removeItem('jwt');
			//window.location.reload();
		})

	}

	static getDerivedStateFromProps(nextProps, prevProps) {

		return { url: nextProps.match.url }

	}

	componentDidUpdate(prevProps, prevState) {

		/*
		console.log('********************')
		console.log(this.state)
		console.log(prevState)

		if (this.state.url !== prevState.url) {

			var jwt = localStorage.getItem('jwt');
			if (jwt == null) {
				//window.location.reload();
			}

			var url = this.state.url;
			if (url.endsWith('/'))
				url = url.substring(0, url.length - 1)
			url = url + ".json?include=journals,attachments"
			axios.post(Constants.url + 'GetIssueDetails', `url=${encodeURIComponent(url)}`, {

				headers: {
					'Authorization': 'Bearer ' + jwt
				}
			}).then(response => {
				console.log(response.data.issue)
				this.setState({
					...this.state,
					issueDetails: { ...response.data.issue },
					isLoading: false
				})
			}).catch(e => {
				console.log(e)
				//localStorage.removeItem('jwt');
				//window.location.reload();
			})
		}

		*/

		if (this.state.url !== prevState.url) {
		var url = this.state.url;
			if (url.endsWith('/'))
				url = url.substring(0, url.length - 1)
			url = url + ".json?include=journals,attachments"
			axios.post(Constants.url + 'GetIssueDetails', `url=${encodeURIComponent(url)}`, {

				headers: {
				
				}
			}).then(response => {
				console.log(response.data.issue)
				this.setState({
					...this.state,
					issueDetails: { ...response.data.issue },
					isLoading: false
				})
			}).catch(e => {
				console.log(e)
				//localStorage.removeItem('jwt');
				//window.location.reload();
			})
		}

	}

	handleSelect = (e) => {
		this.setState({ selected: e.selected })
	}

	downloadAttachment(event) {

		event.preventDefault();
		
		var jwt = localStorage.getItem('jwt');
		if (jwt == null) {
			//window.location.reload();
		}
		var url = event.target.getAttribute('url')
		url = url.split('redmine/')[1];
		alert(url)
		axios.post(Constants.url + 'DownloadAttachment', `url=${encodeURIComponent(url)}`, {

			headers: {

			}
		}).then(response => {
			console.log('!!!!')
			console.log(response.headers)
			//alert(response.headers['Content-disposition'])
			var fileNameString = response.data.fileName
			const url1 = window.URL.createObjectURL(new Blob([response.data.file]));
			const link = document.createElement('a');
			link.href = url1;
			link.setAttribute('download', fileNameString.substring(2,fileNameString.length -2 ));
			document.body.appendChild(link);
			link.click();
			

		}).catch(e => {
			console.log(e)
			//localStorage.removeItem('jwt');
			//window.location.reload();
		})

	}

	render() {


		return (
			<div style={{ margin: '2em' }}>

				{this.state.issueDetails != null &&
					<div className="row">
						<div className="col-lg-10">
							<div className="row justify-content-center">
								<h4>#{this.state.issueDetails.id} - {this.state.issueDetails.subject}</h4>
							</div>
							<div style={{ backgroundColor: 'rgba(156, 155, 155, 0.12)', borderStyle: 'solid 0.1px', borderColor: 'rgba(156, 155, 155, 0.12)', borderRadius: '15px' }}>
								<div className="row justify-content-center">
									<div className="col-lg-6 justify-content-center">
										<Input
											style={{ width: '90%', margin: '1em' }}
											label="Status"
											value={this.state.issueDetails.status.name}
										/>
									</div>
									<div className="col-lg-6 justify-content-center">
										<Input
											style={{ width: '90%', margin: '1em' }}
											label="Priority"
											value={this.state.issueDetails.priority.name}
										/>
									</div>
								</div>
								<div className="row justify-content-center">
									<div className="col-lg-6 justify-content-center">
										<Input
											style={{ width: '90%', margin: '1em' }}
											label="Assignee"
											value={this.state.issueDetails.assigned_to.name}
										/>
									</div>
									<div className="col-lg-6 justify-content-center">
										<Input
											style={{ width: '90%', margin: '1em' }}
											label="Author"
											value={this.state.issueDetails.author.name}
										/>
									</div>
								</div>
								<div className="row justify-content-center">
									<div className="col-lg-6 justify-content-center">
										<Input
											style={{ width: '90%', margin: '1em' }}
											label="Tracker"
											value={this.state.issueDetails.tracker.name}
										/>
									</div>
									<div className="col-lg-6 justify-content-center">
										<Input
											style={{ width: '90%', margin: '1em' }}
											label="Project"
											value={this.state.issueDetails.project.name}
										/>
									</div>
								</div>
								<div className="row justify-content-center">
									<div className="col-lg-6 justify-content-center">
										<Input
											style={{ width: '90%', margin: '1em' }}
											label="Spent Time"
											value={`${this.state.issueDetails.total_spent_hours} h`}
										/>
									</div>
									<div className="col-lg-6 justify-content-center">
										<Input
											style={{ width: '90%', margin: '1em' }}
											label="Created"
											value={new Date(this.state.issueDetails.created_on)}
										/>
									</div>
								</div>

								<div className="row justify-content-center">
									{this.state.issueDetails.custom_fields != undefined &&
										this.state.issueDetails.custom_fields.map(customDetail => {
											return (

												<div className="col-lg-6 justify-content-center">
													<Input
														style={{ width: '90%', margin: '1em' }}
														label={customDetail.name}
														value={customDetail.value}
													/>
												</div>

											)
										})
									}
								</div>
							</div>
							<div className="row">
								<div className="col-lg-10 d-flex flex-column justify-content-start align-items-start">
									{ReactHtmlParser(this.state.issueDetails.description)}
								</div>
							</div>

							{
								this.state.issueDetails.attachments.map(attachment => {

									return (
										<div className="row" style={{ margin: '1em' }}>
											<div className="col-lg-8 d-flex flex-column justify-content-start align-items-start">
												{attachment.filename}
											</div>
											<div className="col-lg-4">
												<Button
													url={attachment.content_url}
													onClick={this.downloadAttachment.bind(this)}
												>
													Download
												</Button>
											</div>
										</div>
									)
								})
							}

							<div className="row ">
								<div className="col-lg-10">
									<TabStrip selected={this.state.selected} onSelect={this.handleSelect.bind(this)}>
										<TabStripTab title="Comments">
											<IssueComments journals={this.state.issueDetails.journals} />
										</TabStripTab>
										<TabStripTab title="History">

										</TabStripTab>
									</TabStrip>
								</div>
							</div>
						</div>

						<div className="col-lg-2"></div>
					</div>}

			</div>
		)
	}
}