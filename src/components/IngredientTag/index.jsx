import { PiPlusBold, PiXBold } from "react-icons/pi";
import { IngredientContainer } from "./styles";

export function IngredientTag({
  icon: Icon,
  onClick,
  title,
  value,
  isNew,
  ...rest
}) {

  return (
    <IngredientContainer readOnly={!isNew}>
      {title}

      {isNew && <input type="text" readOnly={!isNew} value={value} {...rest} />}

      <button onClick={onClick} type="button">
        {isNew ? <PiPlusBold /> : <PiXBold />}
      </button>
    </IngredientContainer>
  );
}
