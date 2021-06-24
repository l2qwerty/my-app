import React from 'react';
import './secondTask.css';

export default class Button extends React.PureComponent {
  render() {
    return (
      <li className={'color' + this.props.index}>
        <button
          key={this.props.name}
          type={this.props.type}
          name={this.props.name}
        >
          {this.props.text}
        </button>
      </li>
    );
  }
}

Button.defaultProps = {
  index: 1,
  type: 'button',
  name: 'Button',
  text: 'Hello World',
};
