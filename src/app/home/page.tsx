import Button from '@/components/atoms/Button/Button'
import './page.scss'
import Question from '@/components/organisms/Question/Question'
import Input from '@/components/atoms/Input/Input'
import PageHeader from '@/components/organisms/PageHeader/PageHeader'
import Image from 'next/image'

import notificationIcon from "@/assets/icons/notification-icon.png"
import questionIcon from "@/assets/icons/question-icon.svg"
import defaultUserIcon from '@/assets/icons/user-icon.svg'
import searchIcon from '@/assets/icons/search-icon.svg'
import ProfileImage from '@/components/atoms/ProfileImage/ProfileImage'
import { montserrat } from '@/utils/fonts/font'
import FeedSearch from '@/components/organisms/FeedSearch/FeedSearch'
import FeedType from '@/components/atoms/FeedType/FeedType'
import PostsFeed from '@/components/organisms/PostsFeed/PostsFeed'

export default function home() {
  return (
    <>
      <PageHeader />
      <main>
        <section className="left-aside">
          <div className={`${montserrat.className} make-your-question`}>
            <h3>Está com dificuldade?</h3>
            <h5>Pesquise por seu problema ou escreva sua
              dúvida agora mesmo!</h5>
            <span>
              <Image src={questionIcon} height={24} width={24} alt="Faça sua pergunta!" />
              <p>Faça sua pergunta!</p>
            </span>
          </div>
        </section>
        <section className='feed'>
          <FeedType type="QUESTION" />
          <FeedSearch />
          <PostsFeed />
        </section>
        <section>
        </section>

      </main >
    </>
  )
}