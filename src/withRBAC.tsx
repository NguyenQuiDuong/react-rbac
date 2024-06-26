import React from 'react';
import { RBACWrapper } from './RBACWrapper';
import { RBACComponentProps } from './RBAC.types';

export function withRBAC<
  T extends object,
  R extends string = string,
  P extends string = string,
>(
  WrappedComponent: React.ComponentType<T>,
  rbacProps: Omit<RBACComponentProps<R, P>, 'children'>
) {
  const ComponentWithRBAC = (props: T) => {
    return (
      <RBACWrapper<R, P> {...rbacProps}>
        <WrappedComponent {...props} />
      </RBACWrapper>
    );
  };
  return ComponentWithRBAC;
}
