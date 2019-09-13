import React from 'react';
import classNames from 'classnames';

import { ContainerWrapper } from './Container.module.scss';

export interface IProps {
  isOverflow?: boolean;
}

class Container extends React.PureComponent<IProps> {
  render() {
    const { children, isOverflow } = this.props;
    return (
      <div
        className={classNames(ContainerWrapper, {
          'overflow-auto': isOverflow
        })}
      >
        {children}
      </div>
    );
  }
}

export default Container;
