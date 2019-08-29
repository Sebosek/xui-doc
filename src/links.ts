import AvatarDetail from './details/Avatar/AvatarDetail';
import CalloutDetail from './details/Callout/CalloutDetail';
import Undefined from './details/Undefined';

export type DefinedComponent = 'Avatar'
  | 'Callout'
  | 'Caption'
  | 'Grid';

interface Link {
  label: string;
  path: string;
  child: React.FunctionComponent<{}>;
}

const Links: { [key in DefinedComponent]: Link } = {
  Avatar: { label: 'Avatar', path: 'avatar', child: AvatarDetail },
  Callout: { label: 'Callout', path: 'callout', child: CalloutDetail },
  Caption: { label: 'Caption', path: 'caption', child: Undefined },
  Grid: { label: 'Grid', path: 'grid', child: Undefined },
  // label: { label: 'Label', path: 'label', child: Undefined },
  // link: { label: 'Link', path: 'link', child: Undefined },
  // loading: { label: 'Loading', path: 'loading', child: Undefined },
  // menu: { label: 'Menu', path: 'menu', child: Undefined },
  // overElement: { label: 'Over element', path: 'over-element', child: Undefined },
  // popover: { label: 'Popover', path: 'popover', child: Undefined },
  // tabs: { label: 'Tabs', path: 'tabs', child: Undefined },
  // title: { label: 'Title', path: 'title', child: Undefined },
  // tooltip: { label: 'Tooltip', path: 'tooltip', child: Undefined },
  // button: { label: 'Button', path: 'button', child: Undefined },
  // checkbox: { label: 'Checkbox', path: 'checkbox', child: Undefined },
  // input: { label: 'Input', path: 'input', child: Undefined },
  // password: { label: 'Password', path: 'password', child: Undefined },
  // radio: { label: 'Radio', path: 'radio', child: Undefined },
  // toggle: { label: 'Toggle', path: 'toggle', child: Undefined },
  // formControl: { label: 'Form control', path: 'form-control', child: Undefined },
  // formItem: { label: 'Form item', path: 'form-item', child: Undefined },
};

export default Links;