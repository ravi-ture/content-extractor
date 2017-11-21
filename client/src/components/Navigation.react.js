var React = require('react'),
    { Link } = require('react-router-dom');

const Navigation = function () {

  var navigationStyle = {
    margin: '25px 0',
    textTransform: 'uppercase',
    textAlign: 'center'
  };

  var navigationIteamStyle = {
    display: 'inline-block',
    width: '100px',
    margin: '0 20px',
    fontSize: '16px',
    fontWeight: '400',
    color: '#000000',
    textTransform: 'uppercase',
    lineHeight: '30px'
  };

  return (
    <div style={navigationStyle}>
      <div className="row">
        <div className="col-sm-8 col-sm-offset-1">
          <div className="row">
            <div className="col-sm-6 right">
              <Link to='/history'>
                <span style={navigationIteamStyle}>Url History</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = Navigation;
