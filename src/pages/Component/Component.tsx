import React, { FunctionComponent } from 'react';
import AvatarWrapper from '../../warppers/Avatar/AvatarWrapper';

const Component: FunctionComponent = (props) => {
  const { match } = props as any;
  const { params } = match;

  return (
    <>
      <h1>Component</h1>
      <span>Current component <b>{ params.name }</b></span>

      <AvatarWrapper />
    </>
  );
};

export default Component;
