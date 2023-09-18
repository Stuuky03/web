import Button from '@/components/atoms/Button/Button'
import './page.scss'

import Title from '@/components/atoms/Title/Title'
import Question from '@/components/Question'

export default function home() {
  return (
    <div className="body">
      <Title name='title' h1='Questões' />
      <main className='main'>
        <div className='question' >
          <div className='question-header' >
            <span></span>
            <div className="info">
              <h5>Albert Smaczylo</h5>
              <h6>Desenvolvimento de Sistemas</h6>
            </div>
          </div>
          <div className='question-content' >
            <p>Pra quando é a apresentação do TCC</p>
          </div>
          <div className='question-button' >
            <Button name='sendButton' value='Responder' />
          </div>
        </div>
        <div className='question' >
          <div className='question-header' >
            <span></span>
            <div className="info">
              <h5>Davi Villar</h5>
              <h6>Agronomia</h6>
            </div>
          </div>
          <div className='question-content' >
            <p>Qual o fluxo diário de água proporcional a quantidade de nutrientes recomendado em uma horta vertical? </p>
          </div>
          <div className='question-button'>
            <Button name='sendButton' value='Responder' />
          </div>
        </div>
        <div className='question' >
          <div className='question-header' >
            <span></span>
            <div className="info">
              <h5>Pedro Schmitz</h5>
              <h6>Administração</h6>
            </div>
          </div>
          <div className='question-content' >
            <p>Como calcula IMC? </p>
          </div>
          <div className='question-button'>
            <Button name='sendButton' value='Responder' />
          </div>
        </div>
        <div className='question' >
          <div className='question-header' >
            <span></span>
            <div className="info">
              <h5>Pedro Schmitz</h5>
              <h6>Administração</h6>
            </div>
          </div>
          <div className='question-content' >
            <p>Como calcula IMC? </p>
          </div>
          <div className='question-button'>
            <Button name='sendButton' value='Responder' />
          </div>
        </div>
        <div className='question' >
          <div className='question-header' >
            <span></span>
            <div className="info">
              <h5>Pedro Schmitz</h5>
              <h6>Biologia</h6>
            </div>
          </div>
          <div className='question-content' >
            <p>Qual o nome científico do mosquito da dengue </p>
          </div>
          <div className='question-button'>
            <Button name='sendButton' value='Responder' />
          </div>
        </div>
        <div className='question' >
          <div className='question-header' >
            <span></span>
            <div className="info">
              <h5>Lucas Morais</h5>
              <h6>Matemática</h6>
            </div>
          </div>
          <div className='question-content' >
            <p>Como FAZ bHASKARA </p>
          </div>
          <div className='question-button'>
            <Button name='sendButton' value='Responder' />
          </div>
        </div>
      </main>
    </div>
  )
}