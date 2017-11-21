var React = require('react'),
    { BrowserRouter } = require('react-router-dom'),
    Application = require('./components/Application.react');

class App extends React.Component {
  render() {
    return ( 
      <BrowserRouter>
        <Application />
      </BrowserRouter>
    );
  }
}

export default App;
