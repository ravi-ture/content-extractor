var React = require('react'),
	{ Route } = require('react-router-dom'),
	Header = require('./Header.react'),
	Content = require('./Content.react'),
  UrlListing = require('./UrlListing.react'),
	UrlContent = require('./UrlContent.react'),
  Footer = require('./Footer.react');

const Application =  function () {
  return (
    <div>
      <Header />
    	<div className="container-fluid text-center">
          
          <Route path='/history' component={UrlListing} />
          <Route path='/website/:id' component={UrlContent} />
          <Route exact path='/' component={Content} />

      	</div>
      <Footer />
    </div>
  );
};
module.exports = Application;
