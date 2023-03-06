import './style.css'
import { codeAcademy } from '../../images/index'

export default function Banner() {
  return (
    <div className="div-banner">
      <img className="codeacademy-img" src={codeAcademy} alt="o time da codeacademy, contendo seis pessoas, sendo duas mulheres e quatro homens" />
    </div>
  )
}