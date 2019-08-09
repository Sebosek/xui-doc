/* eslint import/no-webpack-loader-syntax: off */

import React, { FunctionComponent, useState } from 'react';
import raw from 'raw.macro';
import ReactMarkdown from 'react-markdown';

type AvatarSize = 'xs' | 's' | 'm' | 'l' | 'xl' | undefined;

interface Size {
  value: string;
  label: string;
}

const markdown = raw('Avatar.md');
const sizes = [{
    value: 'xs',
    label: 'Extra small'
  }, {
    value: 's',
    label: 'Small'
  }, {
    value: 'm',
    label: 'Medium'
  }, {
    value: 'l',
    label: 'Large'
  }, {
    value: 'xl',
    label: 'Extra large'
  }
];

const AvatarWrapper: FunctionComponent = () => {
  const [ size, setSize ] = useState(sizes[0]);

  const handleChange = (item: Size) => setSize(item);

  return (
    <>
      <div>
        <xui-avatar
          size={size.value as AvatarSize}
          initials="SB"
          src={undefined}
        ></xui-avatar>
      </div>
      <div className="controls">
        {sizes.map(item => (
          <xui-form-control
            key={item.value}
          >
            <xui-radio
              value={item.value}
              checked={size.value === item.value}
              onClick={() => handleChange(item)}
              slot="control"
              name="size"
            ></xui-radio>
            <xui-text>{ item.label }</xui-text>
          </xui-form-control>
        ))}
      </div>
      <ReactMarkdown 
        source={markdown}
      />
    </>
  )
}

export default AvatarWrapper;