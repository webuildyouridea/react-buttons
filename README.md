# muub-react-buttons
This will be a set of custom react buttons. Right now it only includes one button component with some variations.

```
npm install --save muub-react-buttons
```

```javascript
import {Button} from 'muub-react-buttons';

class Example extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>REACT BUTTONS EXAMPLE</h1>
        <Button buttonStyle={'rounded'}
        onClick={() => alert('hello')}>
          Click me
        </Button>
      </div>
    )
  }
}
```

Props | Values
------|-------
onClick | func *(required)*: Click event handler.
buttonStyle | string *(values: default &#124; rounded)*: Sets one of pre configured button styles.
