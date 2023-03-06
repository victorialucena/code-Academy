import './style.css'
import {infos} from './data'


const Cards = () => {

 return (

  <section>
      
       <div>
          {infos.map(({id, image, nome, idade, profisao, comida, musicas, linguagens}, index) => {
             return (
              <div className="card-box" key={index}>
                  <div>
                    <img className="" src={image}/>
                    <div>
                      <h3>{nome}</h3>
                      <ul className="card-info">
                          <li> {idade}</li>
                          <li> {profisao}</li>
                          <li> {comida}</li>
                          <li> {musicas}</li>
                          <li> {linguagens}</li>
                       </ul>
                    </div>
                  </div>
            </div>
            )
          }
          
          )}
       </div>
  </section>


 )







}

export default Cards