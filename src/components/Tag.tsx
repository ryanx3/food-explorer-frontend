import { TagContainer } from "./styles/Tag";

export function Tag({ title, ...rest }) {
  return <TagContainer {...rest}>{title}</TagContainer>;
}
