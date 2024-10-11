import { NumericFormat } from "react-number-format";
import { Input } from "./Input";
import { NumericContainer } from "../styles/Numeric";

export function InputNumeric({ value, title, setPrice }) {
  return (
    <NumericContainer>
      {title && title}
      <NumericFormat
        value={value}
        allowLeadingZeros={false}
        allowNegative={false}
        decimalScale={2}
        fixedDecimalScale={true}
        decimalSeparator=","
        prefix="R$"
        customInput={Input}
        onValueChange={(values) => setPrice(values.value)}
        placeholder="R$00,00"
      />
    </NumericContainer>
  );
}