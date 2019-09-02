import React, { FunctionComponent, useRef, useEffect } from 'react';
import { init } from '@xui/components/dist/collection/utils/toasts';

const ToastController: FunctionComponent = () => {
  const controllerRef = useRef<HTMLXuiToastControllerElement>(null);

  useEffect(() => {
    if (!controllerRef.current) return;

    init({ toastCtrl: controllerRef.current });
    return () => {};
  }, []);
  
  return (
    <xui-toast-controller
      ref={controllerRef}
    ></xui-toast-controller>
  );
}

export default ToastController;