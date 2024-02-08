import React, { forwardRef } from 'react';
import { NumericFormat } from 'react-number-format';

export const NumericFormatInput = forwardRef((props, ref) => (
  <NumericFormat {...props} getInputRef={ref} />
));

