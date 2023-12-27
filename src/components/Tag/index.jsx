import { PiPlusBold, PiXBold } from 'react-icons/pi'

import { TagDefault, TagCreated, TagNew } from "./styles";

export function Default({ title, ...rest }) {
  return (
    <TagDefault {...rest}>
      {title}
    </TagDefault>
  )
}

export function Created({ title, ...rest }) {
  return (
    <TagCreated {...rest}>
      {title}

      <button>
        <PiXBold />
      </button>

    </TagCreated>
  )
}

export function New({ title, icon: Icon, value, ...rest }) {
  return (
    <TagNew {...rest}>
      <input type="text" placeholder="Adicionar"/>
        


      <button>
        <PiPlusBold />
      </button>

    </TagNew>
  )
} 