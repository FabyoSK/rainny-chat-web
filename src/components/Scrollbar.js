import { forwardRef } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';

export const Scrollbar = forwardRef((props, ref) => {
  const { children, ...other } = props;

  return (
    <PerfectScrollbar
      ref={ref}
      {...other}
    >
      {children}
    </PerfectScrollbar>
  );
});
