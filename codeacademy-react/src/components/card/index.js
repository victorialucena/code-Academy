import './style.css'
import {infos} from './data'
import OutlineAngleLeft from 'iq-blueberry/dist/reactIcons/OutlineAngleLeft'
import OutlineAngleRight from 'iq-blueberry/dist/reactIcons/OutlineAngleRight'
import { Button } from "iq-blueberry"

const Cards = () => {

 return (

  <section>
          {infos.map(({id, image, nome, idade, profisao, comida, musicas, linguagens}, index) => {
             return (
              <div className="card-box" key={index}>
                 <Button className='button'  expand="x" justify="center" Icon={OutlineAngleLeft}>Voltar</Button>
                  <div className="card-info">
                    <img className="img" src={image}/>
                    <div>
                      <ul className="infos">
                          <h3>{nome}</h3>
                          <li> <span className='span-titles'>Idade:</span>  {idade} anos </li>
                          <li> <span className='span-titles'>Profissão dos sonhos na infância: </span> {profisao}</li>
                          <li> <span className='span-titles'>Comida Preferida: </span>{comida}</li>
                          <li> <span className='span-titles'>Musicas Favoritas:</span> {musicas}</li>
                          <li> <span className='span-titles'> Linguagens e Tecnologias que mais curtem: </span>{linguagens}</li>
                       </ul>
                    </div>
                  </div>
                  <Button className='button' expand="x" justify="center" Icon={OutlineAngleRight}>Próximo</Button>
            </div>
            )
          }
          
          )}
  </section>


 )







}

export default Cards