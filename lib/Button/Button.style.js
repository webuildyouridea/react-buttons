'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DEFAULT_COLOR = '#e0e1e2';

var buttonStyles = {
  button: {
    fontSize: '1rem',
    cursor: 'pointer',
    minHeight: '1em',
    outline: 0,
    border: 0,
    verticalAlign: 'baseline',
    background: DEFAULT_COLOR,
    color: 'rgba(0, 0, 0, 0.6)',
    fontFamily: 'Helvetica Neue, Arial, sans-serif',
    fontWeight: 700,
    fontStyle: 'normal',
    textAlign: 'center',
    borderRadius: 7,
    margin: 0,
    padding: 12

  },

  'button--rounded': {
    borderRadius: 22
  }
};

exports.default = buttonStyles;