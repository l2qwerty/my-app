import React from 'react';

const helloUser = <p>Hello user</p>;

function getFullName(props) {
  return (
    <p>
      {props.firstName} {props.lastName}
    </p>
  );
}
