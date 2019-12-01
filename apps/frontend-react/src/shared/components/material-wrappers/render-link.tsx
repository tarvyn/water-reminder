import React from 'react';
import { Link as RouterLink, LinkProps } from 'react-router-dom';

const renderLink = React.forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => (
  <RouterLink innerRef={ref} {...props} />
));

export default renderLink;
