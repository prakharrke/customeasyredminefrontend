import React, { Component } from 'react';
import { Button, ButtonGroup, SplitButton, SplitButtonItem, DropDownButton, DropDownButtonItem, Toolbar, ToolbarItem, ToolbarSeparator } from '@progress/kendo-react-buttons'
import axios from 'axios';
import * as Constants from '../../Constants'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import Loading from './Loading'
import { BrowserRouter, Route, Router, HashRouter, Redirect, Switch , Link} from 'react-router-dom';

export default class IssuesSubject extends Component{

	constructor(props){
		super(props)
		this.state={

		}
	}
	componentWillMount(){
		
	}

	render(){

		return(
			<td><Link to={`/issues/${this.props.dataItem.id}`}>{this.props.dataItem.subject}</Link></td>
			)
	}
}