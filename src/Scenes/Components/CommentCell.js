import React, { Component } from 'react';
import { Button, ButtonGroup, SplitButton, SplitButtonItem, DropDownButton, DropDownButtonItem, Toolbar, ToolbarItem, ToolbarSeparator } from '@progress/kendo-react-buttons'
import axios from 'axios';
import * as Constants from '../../Constants'
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import Loading from './Loading'
import { BrowserRouter, Route, Router, HashRouter, Redirect, Switch , Link} from 'react-router-dom';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
export default class CommentCell extends Component{

	constructor(props){
		super(props)
		this.state={

		}
	}
	componentWillMount(){
		console.log(this.props)
	}

	render(){

		return(
			<td>{ReactHtmlParser(this.props.dataItem.notes)}</td>
			)
	}
}