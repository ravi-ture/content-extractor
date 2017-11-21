var React = require('react'),
    Component = React.Component,
    $ = require('jquery'),
    TagContentTable = require('./TagContentTable.react');

class UrlContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: '',
      tag_contents: []
    }
  }

  componentWillMount(){
    $.getJSON({
      url: `http://localhost:3001/api/v1/websites/${this.props.match.params.id}.json`,
      success: (data) => {
        this.setState({
          url: data['url'],
          tag_contents: data['tag_contents']
        })
      },
      error: (error) => {
        console.log(error);
      } 
    })
  }

  render(){

  var containerStyle = {
    fontFamily: '"Lato", sans-serif',
    padding: '30px 0',
    borderTop: '1px solid #ddd',
    overflow: 'hidden'
  };

  var contentHeaderStyle = {
    fontSize: '26px',
    lineHeight: '36px',
    fontWeight: '300',
    margin: '0 0 30px 0',
    textTransform: 'uppercase'
  };

  var contentStyle = {
    fontSize: '20px',
    margin: 0
  };

  var tag_content_table = this.state.tag_contents.length ? <TagContentTable tag_contents={this.state.tag_contents} /> : <div />;

  return (
    <div className="row">
      <div style={containerStyle}>

        <div className="col-sm-12">
          <h3 style={contentHeaderStyle}>{this.state.url}</h3>
          <p style={contentStyle}>
            {tag_content_table}
          </p>
        </div>
      </div>
    </div>
  )};
}

module.exports = UrlContent;
