import "./FeedSearch.scss"

import Image from "next/image"

import { montserrat } from "@/utils/fonts/font"
import searchIcon from "@/assets/icons/search-icon.svg"

const FeedSearch = () => {
  return (
    <div className='feed-search'>
      <h5>Está com dificuldade ou dúvida em entender algum tema?</h5>
      <h3>Tire suas dúvidas agora mesmo!!</h3>
      <div className='feed-search-input'>
        <input id="feedSearch" placeholder=' ' />
        <label htmlFor="feedSearch">Pesquise por um assunto ou pergunta</label>
        <button className={montserrat.className}>
          <Image src={searchIcon} width={18} height={18} alt='search' />
          Pesquisar</button>
      </div>
    </div>
  )
}

export default FeedSearch