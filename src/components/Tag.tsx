import { TagContainer } from "./Tag";

export function Tag({ title, ...rest }) {
  return <TagContainer {...rest}>{title}</TagContainer>;
}
