/* eslint import/no-webpack-loader-syntax: off */

import React, { FunctionComponent } from 'react';
import raw from 'raw.macro';

const markdown = raw('Avatar.md');

const AvatarWrapper: FunctionComponent = () => {
  return (
    <>
      <div>{ markdown }</div>
      <div>
        <xui-avatar
        ></xui-avatar>
      </div>
    </>
  )
}

export default AvatarWrapper;