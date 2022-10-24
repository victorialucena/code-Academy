import './style.css'
import redLogo from '../../images/redlogo.png'
import iqLogo from '../../images/logo-iq.svg'

export default function Header() {
  return (
    <div className="div-header">
      <img className="logo-rv" src={redLogo} alt="logo da red ventures" />
      <h1 className="title-header">CodeAcademy</h1>
      <img className="logo-iq" src={iqLogo} alt="logo do iq" />
    </div>
  )
}
