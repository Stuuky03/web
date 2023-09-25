import './page.scss'

import PageHeader from '@/components/organisms/PageHeader/PageHeader'
import Image from 'next/image'

import questionIcon from "@/assets/icons/question-icon.svg"
import ProfileImage from '@/components/atoms/ProfileImage/ProfileImage'
import { montserrat } from '@/utils/fonts/font'

import FeedSearch from '@/components/organisms/FeedSearch/FeedSearch'
import FeedType from '@/components/atoms/FeedType/FeedType'
import PostsFeed from '@/components/organisms/PostsFeed/PostsFeed'
import MakeYourQuestion from '@/components/molecules/MakeYourQuestion/MakeYourQuestion'
import UserStatsCount from '@/components/molecules/UserStatsCount/UserStatsCount'
import UserPoints from '@/components/atoms/UserPoints/UserPoints'

export default function home() {
  return (
    <>
      <PageHeader />
      <main>
        <section className="left-aside">
          <MakeYourQuestion />
        </section>
        <section className='feed'>
          <FeedType type="QUESTION" />
          <FeedSearch />
          <PostsFeed />
        </section>
        <section className='right-aside'>
          <div className={`${montserrat.className} user-profile`}>
            <div className='user-info-content'>
              <ProfileImage height={70} width={70} studentUsername='albberrrt' />
              <div className='user-info'>
                <span className='username'>Albert Smaczylo</span>
                <UserPoints points={777} />
              </div>
            </div>
            <UserStatsCount questionsCount={23} stuukesCount={13} timesOnPodium={2} />
          </div>
        </section>

      </main >
    </>
  )
}