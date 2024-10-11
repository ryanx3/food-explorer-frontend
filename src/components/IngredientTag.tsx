import { PiPlusBold, PiXBold } from "react-icons/pi";
import { IngredientContainer } from "./styles/IngredientTag";

export function IngredientTag({
  icon: Icon,
  onClickButton,
  title,
  value,
  isNew,
  ...rest
}) {
  const handleClick = (event) => {
    event.stopPropagation();
    onClickButton();
  };

  return (
    <IngredientContainer readOnly={!isNew}>
      {title}

      {isNew && <input type="text" readOnly={!isNew} value={value} {...rest} />}

      <button onClick={handleClick} type="button">
        {isNew ? <PiPlusBold /> : <PiXBold />}
      </button>
    </IngredientContainer>
  );
}
