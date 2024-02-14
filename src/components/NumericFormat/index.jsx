import React, { forwardRef } from 'react';
import { NumericFormat } from 'react-number-format';

export const NumericFormatInput = forwardRef((props, ref) => (
  <NumericFormat
    {...props} allowLeadingZeros={false} allowNegative={false} fixedDecimalScale={true} decimalScale={2} getInputRef={ref} />
));

