import Banner from './components/banner'
import Cards from './components/card'
import Header from './components/header'
import './reset.css'
import './style.css'

function Portfolio() {
  return (
    <div className="div-portifolio">
      <Header />
      <Banner />
      <Cards/>
    </div>
  )
}
export default Portfolio
