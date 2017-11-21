var React = require('react'),
    Component = React.Component,
    $ = require('jquery'),
    { Link } = require('react-router-dom'),
    BS = require('react-bootstrap'),
    Table = BS.Table,
    FormGroup = BS.FormGroup,
    FormControl = BS.FormControl,
    InputGroup = BS.InputGroup,
    Pagination = BS.Pagination;

class UrlListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      urlOptions: {},
      websites: [],
      activePage: null,
      total_pages: null
    }
  }

  componentDidMount(){
    this.loadUrls()
  }

  handleChange(ev){
    this.setState({
      urlOptions: Object.assign( this.state.urlOptions, { keyword: ev.target.value })
    })
    this.loadUrls()
  }

  handlePagination(selectedPage){
    this.setState({
      activePage: selectedPage
    })

    this.loadUrls(selectedPage)
  }

  loadUrls(pagination=null){
    $.getJSON({
      url: "http://localhost:3001/api/v1/websites.json",
      data: Object.assign(this.state.urlOptions, {page: pagination || this.state.activePage} ),
      type: 'GET',
      success: (data) => {
        this.setState({
          websites: data['websites'],
          activePage: data['current_page'],
          total_pages: data['total_pages']
        })
      },
      error: (xhr, error) => {
        console.log(xhr)
        console.log(error);
      } 
    })
  }

  changeOrder(ev){
    var order_by = `${$(ev.target).data('argument')} ${$(ev.target).data('order')}`
    this.setState({
      urlOptions: Object.assign(this.state.urlOptions, {order: order_by})
    })
    this.loadUrls();
    $(ev.target).data('order', ($(ev.target).data('order') === 'ASC' ? 'DESC' : 'ASC'))
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
  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div style={containerStyle}>
          <div className="col-sm-12">
            <h3 style={contentHeaderStyle}>Url for content extraction</h3>
            <p style={contentStyle}>
              <div  style={contentStyle} >
                <div className="col-sm-6">
                  <form>
                    <FormGroup>
                      <InputGroup>
                        <FormControl type="text" value={this.state.urlOptions.keyword} onChange={this.handleChange.bind(this)} tabindex='1'  autofocus=''/>
                      </InputGroup>
                    </FormGroup>
                  </form>
                </div>
                <div className="col-sm-6">
                  <Pagination 
                    bsSize='large'
                    activePage={this.state.activePage} 
                    items={this.state.total_pages} 
                    onSelect={this.handlePagination.bind(this)} />
                </div>
              </div>
              <Table>
                <thead>
                <tr>
                  <th>#</th>
                  <th><a href='javascript:void(0)' onClick={this.changeOrder.bind(this)} data-argument='url'  data-order='ASC'>Website Url</a></th>
                  <th><a href='javascript:void(0)' onClick={this.changeOrder.bind(this)} data-argument='id'  data-order='ASC'>Created At</a></th>
                  <th><a href='javascript:void(0)' onClick={this.changeOrder.bind(this)} data-argument='updated_at'  data-order='ASC'>Last Updated At</a></th>
                </tr>
                </thead>
                <tbody>
                  {this.state.websites.map((website, index) => {
                    return(
                      <tr>
                        <td>{ index + 1 }</td>
                        <td>
                          <Link to={"/website/" + website['id']}> {website['url']} </Link>
                        </td>
                        <td>{website['created_at']}</td>
                        <td>{website['updated_at']}</td>
                      </tr>
                    )
                  })}
                </tbody>
              </Table>
            </p>
          </div>
        </div>
      </div>
    </div>
  )};
}

module.exports = UrlListing;
