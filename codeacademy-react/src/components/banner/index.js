import './style.css'
import codeAcademy from '../../images/codeacademy.jpeg'

export default function Banner() {
  return (
    <div className="div-banner">
      <img className="codeacademy-img" src={codeAcademy} alt="o time da codeacademy, contendo sete pessoas, sendo duas mulheres e cinco homens" />
    </div>
  )
}