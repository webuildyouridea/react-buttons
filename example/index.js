import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h1>REACT BUTTONS EXAMPLE</h1>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('app'));
