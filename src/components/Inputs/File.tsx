import { PiUploadSimpleBold } from "react-icons/pi";
import { InputFileContainer, Files } from "./File";
export function InputFile({title, filename, ...rest}) {
  return (
    <InputFileContainer>
      {title && title}
      <Files>
        <label htmlFor="image">
          <PiUploadSimpleBold />
          <span>{filename || "Selecionar imagem"}</span>
          <input id="image" type="file" {...rest} />
        </label>
      </Files>
    </InputFileContainer>
  );
}
