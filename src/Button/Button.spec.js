import React from 'react';
import $ from 'teaspoon'

import Button from './Button';

describe('Button class', () => {
  let props;
  let mountedButton;

  const button = () => {
    if (!mountedButton) {
      mountedButton = $(<Button {...props} />).render();
    }

    return mountedButton;
  };

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
      children: null,
      buttonStyle: null
    };

    mountedButton = undefined;
  })

  it('should render a button element', () => {
    const buttons = button().find('button');

    expect(buttons.length).toBe(1);
  });

  it('should pass onClick prop', () => {
    const buttonElem = button().find('button');

    expect(buttonElem.props().onClick).toBe(props.onClick);
  })

  describe('when a string is passed as children', () => {
    beforeEach(() => {
      props = {
        onClick: jest.fn(),
        children: 'Click me'
      }
    })

    it('should add the string passed to rendered button element', () => {
      const buttonElem = button().find('button');

      expect(buttonElem.props().children).toBe(props.children);
    });
  });

  describe('when className prop is passed', () => {
    beforeEach(() => {
      props = {
        onClick: jest.fn(),
        className: 'myButtonClass'
      }
    });

    it('should include the className provided with the default css classes', () => {
      const buttonElem = button().find('button');

      const className = buttonElem.props().className;

      expect(className.match(props.className)).toBeTruthy();
    });
  });

  describe('when a valid button style value is passed', () => {
    beforeEach(() => {
      props = {
        onClick: jest.fn(),
        buttonStyle: 'rounded'
      }
    });

    it('should add a css class for that button style', () => {
      const buttonElem = button().find('button');

      const className = buttonElem.props().className;

      expect(className.match(props.buttonStyle)).toBeTruthy()
    });
  });

  describe('when a style prop is passed', () => {
    beforeEach(() => {
      props = {
        onClick: jest.fn(),
        style: {fontSize: 14}
      }
    });

    it('should applied the passed style to button elem', () => {
      const buttonElem = button().find('button');

      expect(buttonElem.props().style).toBe(props.style)
    });
  });

  describe('when a color prop is passed', () => {
    beforeEach(() => {
      props = {
        onClick: jest.fn(),
        color: 'blue'
      }
    });

    it('should set background-color style property to the color passed', () => {
      const buttonElem = button().find('button');

      const backgroundColor = buttonElem.props().style.backgroundColor;

      expect(backgroundColor).toBe(props.color);
    });
  });

});
