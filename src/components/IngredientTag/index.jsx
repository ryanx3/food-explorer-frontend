import { PiPlusBold, PiXBold } from "react-icons/pi";
import { IngredientContainer } from "./styles";

export function IngredientTag({
  icon: Icon,
  title,
  readOnly = false,
  ...rest
}) {
  return (
    <IngredientContainer>
      <input type="text" readOnly {...rest} />

      <button type="button">{readOnly ? <PiPlusBold /> : <PiXBold />}</button>
    </IngredientContainer>
  );
}

// export function Remover({ title, onClick, readOnly = true, ...rest }) {
//   return (
//     <TagRemover readOnly {...rest}>
//       {title}

//       <button type="button" onClick={onClick}>
//         <PiXBold />
//       </button>
//     </TagRemover>
//   );
// }
