import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import raw from 'raw.macro';
import ReactMarkdown from 'react-markdown';
import SampleBox from '../../components/SampleBox/SampleBox';

type AvatarSize = 'xs' | 's' | 'm' | 'l' | 'xl' | undefined;

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
  // state
  const [ size, setSize ] = useState(sizes[Math.floor(sizes.length / 2)]);
  const [ imageEnabled, setImageEnabled ] = useState(false);
  const [ imageSource ] = useState('http://sebastianbusek.cz/extra/fry.jpg');

  // ref
  const refs = sizes.map(() => React.createRef<HTMLXuiRadioElement>());
  const imageEnabledRef = useRef(null);
  // const imageSourceRef = useRef(null);

  // handlers
  function handleSelect(e: Event) {
    const event = e as unknown as React.FormEvent<HTMLXuiRadioElement>;
    const target = event.target as HTMLXuiRadioElement;
    const value = sizes.find(s => s.value === target.value);

    if (!value) return;
    setSize(value);
  }

  function handleCheckbox() {
    const cbx = imageEnabledRef.current as unknown as HTMLXuiCheckboxElement;
    setImageEnabled(cbx.checked);
  }

  useEffect(() => {
    const cbx = imageEnabledRef.current as unknown as HTMLXuiCheckboxElement;
    cbx.addEventListener('changed', handleCheckbox);

    const els: HTMLXuiRadioElement[] = [];
    refs.forEach(ref => {
      const el = ref.current as unknown as HTMLXuiRadioElement;

      els.push(el);
      el.addEventListener('selected', handleSelect);
    });

    return () => {
      cbx.removeEventListener('changed', handleCheckbox);
      els.forEach(el => {
        el.removeEventListener('selected', handleSelect);
      });
    };
  }, [refs]);

  return (
    <>
      <SampleBox>
        <xui-avatar
          size={ size.value as AvatarSize }
          initials="SB"
          src={ imageEnabled ? imageSource : '' }
        ></xui-avatar>
      </SampleBox>

      <div className="controls">
        <h2>Sizes</h2>
        {sizes.map((item, key) => (
          <label
            key={ item.value }
          >
            <xui-form-control>
              <xui-radio
                value={ item.value }
                checked={ size.value === item.value }
                ref={ refs[key] }
                slot="control"
                name="size"
              ></xui-radio>
              <span>{ item.label }</span>
            </xui-form-control>
          </label>
        ))}
      </div>

      <div className="controls">
        <h2>Image</h2>
        <label>
          <xui-form-control>
            <xui-checkbox
              slot="control"
              name="img-enable"
              checked={ imageEnabled }
              ref={ imageEnabledRef }
            ></xui-checkbox>
            <span>Use image</span>
          </xui-form-control>
          <xui-form-item>
          <xui-label
            slot="label"
          >Image URL</xui-label>
          <xui-input
            value={ imageSource }
            disabled={ !imageEnabled }
          ></xui-input>
          </xui-form-item>
        </label>
      </div>
      <ReactMarkdown 
        source={markdown}
      />
    </>
  )
}

export default AvatarWrapper;