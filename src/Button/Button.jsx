// @flow

import React, {PropTypes} from 'react';
import classNames from 'classnames';
import injectSheet from 'react-jss';

import styles from './Button.style.js'

class Button extends React.Component {
  constructor(props: Object) {
    super(props);
  }

  static propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node,
    className: PropTypes.string,
    buttonStyle: PropTypes.oneOf(['default', 'rounded']),
    color: PropTypes.string,
    style: PropTypes.object,

    // JSS
    classes: PropTypes.object
  }

  static defaultProps = {
    buttonStyle: 'default'
  }

  render() {
    const {
      onClick,
      children,
      className,
      classes,
      style,
      color,
      buttonStyle
    } = this.props;

    const inlineStyle = style || {};

    if (color) {
      inlineStyle['backgroundColor'] = color;
    }

    return (
      <button className={classNames({
        [classes.button]: true,
        [classes[`button--${buttonStyle}`]]: true,
        [`${className}`]: true
      })}
      style={inlineStyle}
      onClick={onClick}>
        {children}
      </button>
    )
  }
}

export default injectSheet(styles)(Button);
