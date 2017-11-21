var React = require('react'),
		Component = React.Component,
		BS = require('react-bootstrap'),
		Table = BS.Table;


class TagContentTable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tag_contents: this.props.tag_contents
		}

	}

	render(){
		var rows = []
		rows = this.state.tag_contents.map((tag, i) =>{
      return (
      	<tr>
	        <td>{ i + 1 }</td>
	        <td>{tag['tag_type']}</td>
	        <td>{tag['content']}</td>
				</tr>
			);
    	
    })

		return(
			<div className='col-sm-12'>
				<Table responsive>
			    <thead>
			      <tr>
			        <th>#</th>
			        <th>Tag Type</th>
			        <th>Tag Content</th>
			      </tr>
			    </thead>
			    <tbody>
				    {rows}
					</tbody>
				</Table>
			</div>
		);
	}
}

module.exports = TagContentTable;