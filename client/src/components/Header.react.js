var React = require('react'),
    { Link } = require('react-router-dom');

const Header = () => {

  var containerStyle = {
    fontFamily: '"Lato", sans-serif',
    margin: '40px 0',
    overflow: 'hidden'
  };

  var h1Style = {
    color: '#e74c3c',
    fontSize: '28px',
    fontWeight: '600',
    textTransform: 'uppercase',
    textAlign: 'center'
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div style={containerStyle}>

          <div className="col-sm-6">
            <Link to="/"><h1 style={h1Style}>Content Extractor</h1></Link>
          </div>

          <div className="col-sm-6">
            <Link to="/history"><h1 style={h1Style}>Previous Links</h1></Link>
          </div>

        </div>
      </div>
    </div>
  );
}

module.exports = Header;
