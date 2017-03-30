'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _babelTransform = require('livereactload/babel-transform');

var _babelTransform2 = _interopRequireDefault(_babelTransform);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

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

var _components = {
  Button: {
    displayName: 'Button'
  }
};

var _livereactloadBabelTransform2 = (0, _babelTransform2.default)({
  filename: 'src/Button/Button.jsx',
  components: _components,
  locals: [],
  imports: [_react3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _livereactloadBabelTransform2(Component, id);
  };
}

var Button = _wrapComponent('Button')((_temp = _class = function (_React$Component) {
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

      return _react3.default.createElement(
        'button',
        { className: (0, _classnames2.default)(className, (_classNames = {}, _defineProperty(_classNames, classes.button, true), _defineProperty(_classNames, classes['button--' + buttonStyle], true), _classNames)),
          style: inlineStyle,
          onClick: onClick },
        children
      );
    }
  }]);

  return Button;
}(_react3.default.Component), _class.propTypes = {
  onClick: _react2.PropTypes.func.isRequired,
  children: _react2.PropTypes.node,
  className: _react2.PropTypes.string,
  buttonStyle: _react2.PropTypes.oneOf(['default', 'rounded']),
  color: _react2.PropTypes.string,
  style: _react2.PropTypes.object,

  // JSS
  classes: _react2.PropTypes.object
}, _class.defaultProps = {
  buttonStyle: 'default'
}, _temp));

exports.default = (0, _reactJss2.default)(_ButtonStyle2.default)(Button);