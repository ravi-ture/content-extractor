var React = require('react');

var Footer = () => {

  var containerStyle = {
    fontFamily: '"Lato", sans-serif',
    padding: '40px 0',
    borderTop: '1px solid #ddd',
    overflow: 'hidden',
    backgroundColor: '#555',
    color: '#ccc'
  };

  var footerContentStyle = {
    fontSize: '16px',
    fontWeight: '200',
    margin: 0
  };

  return (
    <div className="container-fluid text-center">
      <div className="row">
        <div style={containerStyle} data-style-footer>

          <div className="col-sm-12">
            <p style={footerContentStyle}>Built for demo purpose</p>
          </div>

        </div>
      </div>
    </div>
  );
}

module.exports = Footer;
