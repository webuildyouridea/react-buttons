import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import {Button} from '../src';

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>REACT BUTTONS EXAMPLE</h1>
        <Button buttonStyle={'rounded'} onClick={() => alert('hello')}>
          Click me
        </Button>
      </div>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('app'));
