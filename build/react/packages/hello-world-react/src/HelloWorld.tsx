import React from 'react';

interface HelloWorldProps {
  name?: string;
}

const HelloWorld = ({ name = 'World' }: HelloWorldProps): JSX.Element => {
  return <h1>Hello from library , {name}!</h1>;
};

export default HelloWorld;
