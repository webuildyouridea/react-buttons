'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _reactJss = require('react-jss');

var _reactJss2 = _interopRequireDefault(_reactJss);

var _ButtonStyle = require('./Button.style.js');

var _ButtonStyle2 = _interopRequireDefault(_ButtonStyle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Button = function (_React$Component) {
  _inherits(Button, _React$Component);

  function Button(props) {
    _classCallCheck(this, Button);

    return _possibleConstructorReturn(this, (Button.__proto__ || Object.getPrototypeOf(Button)).call(this, props));
  }

  _createClass(Button, [{
    key: 'render',
    value: function render() {
      var _classNames;

      var _props = this.props,
          onClick = _props.onClick,
          children = _props.children,
          className = _props.className,
          classes = _props.classes,
          style = _props.style,
          color = _props.color,
          buttonStyle = _props.buttonStyle;


      var inlineStyle = style || {};

      if (color) {
        inlineStyle['backgroundColor'] = color;
      }

      return _react2.default.createElement(
        'button',
        { className: (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, classes.button, true), _defineProperty(_classNames, classes['button--' + buttonStyle], true), _defineProperty(_classNames, '' + className, true), _classNames)),
          style: inlineStyle,
          onClick: onClick },
        children
      );
    }
  }]);

  return Button;
}(_react2.default.Component);

Button.propTypes = {
  onClick: _react.PropTypes.func.isRequired,
  children: _react.PropTypes.node,
  className: _react.PropTypes.string,
  buttonStyle: _react.PropTypes.oneOf(['default', 'rounded']),
  color: _react.PropTypes.string,
  style: _react.PropTypes.object,

  // JSS
  classes: _react.PropTypes.object
};
Button.defaultProps = {
  buttonStyle: 'default'
};
exports.default = (0, _reactJss2.default)(_ButtonStyle2.default)(Button);