import React, { FunctionComponent } from 'react';
import styles from './ComponentLink.module.scss';
import { Route } from 'react-router-dom'

interface ComponentLinkProps {
  name: string;
  path?: string;
}

const ComponentLink: FunctionComponent<ComponentLinkProps> = ({ name, path }) => (
  <Route render={({ history }) => (
    <li className={styles.name}>
      <xui-link
        onClick={() => history.push(`/component/${path || name}`)}
      >{ name }</xui-link>
    </li>
  )} />
);

export default ComponentLink;