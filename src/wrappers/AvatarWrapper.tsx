import React, { FunctionComponent, useRef, useEffect, HTMLAttributes } from 'react';
import { size } from '@xui/components/dist/types/components/avatar/avatar.size';

interface AvatarProps {
  size?: size;
  initials?: string;
  src?: string;
  onError?: () => void;
}

const Avatar: FunctionComponent<HTMLAttributes<HTMLElement> & AvatarProps> = ({
  size = 'm',
  initials,
  src,
  onError = () => {},
}: AvatarProps) => {
  const avatarRef = useRef<HTMLXuiAvatarElement>(null);

  useEffect(() => {
    if (avatarRef.current === null) return;
    
    const xui = avatarRef.current;
    xui.addEventListener('loading-error', onError);

    return () => {
      xui.removeEventListener('loading-error', onError);
    };
  }, [onError]);

  return (
    <xui-avatar
      size={size}
      initials={initials}
      src={src}
      ref={avatarRef}
    ></xui-avatar>
  );
};

export default Avatar;