import './style.css'
import { logoIq } from '../../images/index'
import { redLogo } from '../../images/index'

export default function Header() {
  return (
    <div className="div-header">
      <img className="logo-rv" src={redLogo} alt="logo da red ventures" />
      <h1 className="title-header">CodeAcademy</h1>
      <img className="logo-iq" src={logoIq} alt="logo do iq" />
    </div>
  )
}
