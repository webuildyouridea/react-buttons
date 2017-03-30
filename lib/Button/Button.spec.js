'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _teaspoon = require('teaspoon');

var _teaspoon2 = _interopRequireDefault(_teaspoon);

var _Button = require('./Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Button class', function () {
  var props = void 0;
  var mountedButton = void 0;

  var button = function button() {
    if (!mountedButton) {
      mountedButton = (0, _teaspoon2.default)(_react2.default.createElement(_Button2.default, props)).render();
    }

    return mountedButton;
  };

  beforeEach(function () {
    props = {
      onClick: jest.fn(),
      children: null,
      buttonStyle: null
    };

    mountedButton = undefined;
  });

  it('should render a button element', function () {
    var buttons = button().find('button');

    expect(buttons.length).toBe(1);
  });

  it('should pass onClick prop', function () {
    var buttonElem = button().find('button');

    expect(buttonElem.props().onClick).toBe(props.onClick);
  });

  describe('when a string is passed as children', function () {
    beforeEach(function () {
      props = {
        onClick: jest.fn(),
        children: 'Click me'
      };
    });

    it('should add the string passed to rendered button element', function () {
      var buttonElem = button().find('button');

      expect(buttonElem.props().children).toBe(props.children);
    });
  });

  describe('when className prop is passed', function () {
    beforeEach(function () {
      props = {
        onClick: jest.fn(),
        className: 'myButtonClass'
      };
    });

    it('should include the className provided with the default css classes', function () {
      var buttonElem = button().find('button');

      var className = buttonElem.props().className;

      expect(className.match(props.className)).toBeTruthy();
    });
  });

  describe('when a valid button style value is passed', function () {
    beforeEach(function () {
      props = {
        onClick: jest.fn(),
        buttonStyle: 'rounded'
      };
    });

    it('should add a css class for that button style', function () {
      var buttonElem = button().find('button');

      var className = buttonElem.props().className;

      expect(className.match(props.buttonStyle)).toBeTruthy();
    });
  });

  describe('when a style prop is passed', function () {
    beforeEach(function () {
      props = {
        onClick: jest.fn(),
        style: { fontSize: 14 }
      };
    });

    it('should applied the passed style to button elem', function () {
      var buttonElem = button().find('button');

      expect(buttonElem.props().style).toBe(props.style);
    });
  });

  describe('when a color prop is passed', function () {
    beforeEach(function () {
      props = {
        onClick: jest.fn(),
        color: 'blue'
      };
    });

    it('should set background-color style property to the color passed', function () {
      var buttonElem = button().find('button');

      var backgroundColor = buttonElem.props().style.backgroundColor;

      expect(backgroundColor).toBe(props.color);
    });
  });
});