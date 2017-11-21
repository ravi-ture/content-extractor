var React = require('react'),
    Component = React.Component,
    $ = require('jquery'),
    TagContentTable = require('./TagContentTable.react'),
    BS = require('react-bootstrap'),
    FormGroup = BS.FormGroup,
    FormControl = BS.FormControl,
    InputGroup = BS.InputGroup,
    Button = BS.Button;

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url_string: '',
      tag_contents: []
    }
  }

  handleChange(ev){
    this.setState({
      url_string: ev.target.value
    })
  }

  handleSubmit(ev){
    ev.preventDefault();
    $.getJSON({
      url: 'http://localhost:3001/api/v1/websites/extract_content',
      data: {website: {url: this.state.url_string}},
      success: (data) => {
        this.setState({
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
          <h3 style={contentHeaderStyle}>Url for content extraction</h3>
          <p style={contentStyle}>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup>
                <InputGroup>
                  <FormControl type="text" value={this.state.url_string} onChange={this.handleChange.bind(this)}  autofocus=''/>
                  <InputGroup.Button>
                  <Button onClick={this.handleSubmit.bind(this)} >Extract Content</Button>
                  </InputGroup.Button>
                </InputGroup>
              </FormGroup>
            </form>
          </p>
        </div>
        {tag_content_table}
      </div>
    </div>
  )};
}

module.exports = Content;
