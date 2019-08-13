import React, { FunctionComponent } from 'react';
import AvatarDetail from '../../details/Avatar/AvatarDetail';

const Component: FunctionComponent = (props) => {
  const { match } = props as any;
  const { params } = match;

  return (
    <>
      <h1>Component</h1>
      <span>Current component <b>{ params.name }</b></span>

      <AvatarDetail />
    </>
  );
};

export default Component;
