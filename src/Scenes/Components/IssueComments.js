import React, { Component } from 'react';
import { Button, ButtonGroup, SplitButton, SplitButtonItem, DropDownButton, DropDownButtonItem, Toolbar, ToolbarItem, ToolbarSeparator } from '@progress/kendo-react-buttons'
import { MultiSelect, AutoComplete, DropDownList } from '@progress/kendo-react-dropdowns';
import Loading from './Loading'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import CommentCell from './CommentCell'
import { PanelBar, PanelBarItem } from '@progress/kendo-react-layout';
export default class IssueComments extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}


	render() {
		console.log('****')
		console.log(this.props.journals)
		var comments = this.props.journals.map(journal => {

			if (journal.notes != "" && journal.notes != undefined) {

				return (

					<PanelBar>
						<PanelBarItem title={journal.user.name}>
							{ReactHtmlParser(journal.notes)}
						</PanelBarItem>
					</PanelBar>


				)
			}
		})
		return (
			<div>
				{comments}
			</div>
		)
	}
}