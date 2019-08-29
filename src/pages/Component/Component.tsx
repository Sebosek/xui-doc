import React, { FunctionComponent } from 'react';
import Links, { DefinedComponent } from '../../links';
import Undefined from '../../details/Undefined';

const Component: FunctionComponent = (props) => {
  const { match } = props as any;
  const { params } = match;
  const name: DefinedComponent = params.name;
  const link = Links[name];
  
  if (!link) {
    return <Undefined />
  }

  const Child = link.child;
  return (
    <div>
      <Child />
    </div>
  );
};

export default Component;
