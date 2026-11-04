import { SHOP } from '../content.js'
import { Icon } from '../icons.jsx'

export default function CallFloat() {
  return (
    <a className="call-float" href={`tel:${SHOP.phoneE164}`} aria-label={`Call ${SHOP.name}`}>
      <Icon name="phone" />
    </a>
  )
}
