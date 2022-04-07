import React, { forwardRef, type HTMLProps } from 'react';

export type TextProps = HTMLProps<HTMLSpanElement>;

export const Text = forwardRef<HTMLSpanElement, TextProps>((props, ref) => {
  return <span ref={ref} {...props} />;
});
