//SVG
import { PiPlusBold, PiXBold } from "react-icons/pi";

import { TagDefault, TagRemover, TagCreator } from "./styles";

export function Default({ title, ...rest }) {
  return <TagDefault {...rest}>{title}</TagDefault>;
}

export function Creator({ title, icon: Icon, onClick, ...rest }) {
  return (
    <TagCreator {...rest}>
      <input type="text" placeholder="Adicionar" {...rest}/>

      <button type="button" onClick={onClick}>
        <PiPlusBold />
      </button>
    </TagCreator>
  );
}

export function Remover({ title, onClick, readOnly = true, ...rest }) {
  return (
    <TagRemover readOnly {...rest}>
      {title}

      <button type="button" onClick={onClick}>
        <PiXBold />
      </button>
    </TagRemover>
  );
}
