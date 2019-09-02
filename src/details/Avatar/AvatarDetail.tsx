import React, { FunctionComponent, useState, useRef, useEffect } from 'react';
import raw from 'raw.macro';
import ReactMarkdown from 'react-markdown';
import { size } from '@xui/components/dist/types/components/avatar/avatar.size';
import { showToast } from '@xui/components/dist/collection/utils/toasts';
import SampleBox from '../../components/SampleBox/SampleBox';
import InputWrapper from '../../wrappers/InputWrapper';
import SampleBoxControls from '../../components/SampleBoxControls/SampleBoxControls';
import RadioWrapper from '../../wrappers/RadioWrapper';
import CheckboxWrapper from '../../wrappers/CheckboxWrapper';

interface Size {
  value: size;
  label: string;
}

const markdown = raw('Avatar.md');
const sizes: Size[] = [{
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

const AvatarDetail: FunctionComponent = () => {
  // state
  const [ size, setSize ] = useState(sizes[Math.floor(sizes.length / 2)]);
  const [ imageEnabled, setImageEnabled ] = useState(false);
  const [ imageSource, setImageSource ] = useState('https://i.pravatar.cc/128');
  const avatarRef = useRef<HTMLXuiAvatarElement>(null);

  useEffect(() => {
    if (avatarRef.current === null) return;
    
    const xui = avatarRef.current;
    xui.addEventListener('loading-error', handleLoadingError);

    return () => {
      xui.removeEventListener('loading-error', handleLoadingError);
    };
  }, []);

  // handlers
  const handleCheckbox = (checbox: HTMLXuiCheckboxElement) => setImageEnabled(checbox.checked);
  const handleUrl = (input: HTMLXuiInputElement) => setImageSource(input.value.toString());
  const handleSelect = (radio: HTMLXuiRadioElement) => {
    const value = radio.value;
    const size = sizes.find(s => s.value === value);

    if (!size) return;
    setSize(size);
  }
  const handleLoadingError = () => showToast({ text: 'Unable to load avatar image.' });

  return (
    <>
      <SampleBox
        controls={[
          <SampleBoxControls
            title="Size"
          >
            {sizes.map(item => 
              <label
                key={ item.value }
              >
                <xui-form-control>
                  <RadioWrapper
                    value={ item.value }
                    checked={ size.value === item.value }
                    name="size"
                    onSelected={ handleSelect }
                    slot="control"
                  />
                  <span>{ item.label }</span>
                </xui-form-control>
              </label>
            )}
          </SampleBoxControls>,
          <SampleBoxControls
            title="Image"
          >
            <xui-form-control>
              <CheckboxWrapper
                slot="control"
                checked={ imageEnabled }
                onChanged={ handleCheckbox }
              />
              <span>Use image</span>
            </xui-form-control>
            <xui-form-item
              style={{
                display: 'block',
                width: '320px',
              }}
            >
              <xui-label
                slot="label"
              >Image URL</xui-label>
              <InputWrapper
                value={ imageSource }
                disabled={ !imageEnabled }
                onChange={ handleUrl }
              />
            </xui-form-item>
          </SampleBoxControls>
        ]}
      >
        <xui-avatar
          size={ size.value }
          initials="SB"
          src={ imageEnabled ? imageSource : '' }
          ref={avatarRef}
        ></xui-avatar>
      </SampleBox>

      <ReactMarkdown 
        source={markdown}
      />
    </>
  )
}

export default AvatarDetail;