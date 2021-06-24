import React from 'react';
import Button from './secondTask';
import './secondTask.css';

class Buttons extends React.Component {
  render() {
    return (
      <ul className='btnList'>
        {this.props.btnText.map((text, index) => {
          return <Button text={text} key={index} index={index} />;
        })}
      </ul>
    );
  }
}

export default Buttons;
