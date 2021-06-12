import React from 'react';
import './secondTask.css';

export default class Button extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul>
        <li className='yellow'>
          <button key='this.props.name' type='button' name='Button1'>
            Hello
          </button>
        </li>
        <li className='blue'>
          <button key='this.props.name' type='button' name='Button2'>
            My
          </button>
        </li>
        <li className='red'>
          <button key='this.props.name' type='button' name='Button3'>
            Dear
          </button>
        </li>
        <li className='green'>
          <button key='this.props.name' type='button' name='Button4'>
            Friend
          </button>
        </li>
        <li className='orange'>
          <button key='this.props.name' type='button' name='Button5'>
            :)
          </button>
        </li>
      </ul>
    );
  }
}

Button.defaultProps = {
  type: 'button',
  name: 'Button',
};
