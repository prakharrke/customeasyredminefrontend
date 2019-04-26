import React, { Component } from 'react';
import { Button, ButtonGroup, SplitButton, SplitButtonItem, DropDownButton, DropDownButtonItem, Toolbar, ToolbarItem, ToolbarSeparator } from '@progress/kendo-react-buttons'
import { MultiSelect, AutoComplete, DropDownList } from '@progress/kendo-react-dropdowns';
import axios from 'axios';
import * as Constants from '../../Constants'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import Loading from './Loading'
import { BrowserRouter, Route, Router, HashRouter, Redirect, Switch } from 'react-router-dom';

export default class ProjectDetails extends Component{


	constructor(props){

		super(props);
		this.state={

		}
	}

	componentWillMount(){

		console.log("Project Details")
		console.log(this.props)
	}

	render(){
		return(
			<div>
				
				
			</div>
			)
	}
}