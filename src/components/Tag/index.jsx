import { TagContainer } from "./styles";

export function Tag({ title, ...rest }) {
  return <TagContainer {...rest}>{title}</TagContainer>;
}
