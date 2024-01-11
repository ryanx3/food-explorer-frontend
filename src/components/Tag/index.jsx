//SVG
import { PiPlusBold, PiXBold } from 'react-icons/pi'

import { TagDefault, TagDelete, TagNew } from "./styles";

export function Default({ title, ...rest }) {
  return (
    <TagDefault {...rest}>
      {title}
    </TagDefault>
  )
}

export function New({ title, icon: Icon, value, ...rest }) {
  return (
    <TagNew {...rest}>
      <input type="text" placeholder="Adicionar" />

      <button>
        <PiPlusBold />
      </button>

    </TagNew>
  )
}

export function Delete({ title, ...rest }) {
  return (
    <TagDelete {...rest}>
      {title}
      <button>
        <PiXBold />
      </button>
    </TagDelete>
  )
}