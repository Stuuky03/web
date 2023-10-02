"use client"
import './page.scss'

import FeedSearch from '@/components/organisms/FeedSearch/FeedSearch'
import FeedType from '@/components/atoms/FeedType/FeedType'
import PostsFeed from '@/components/organisms/PostsFeed/PostsFeed'
import MakeYourQuestion from '@/components/molecules/MakeYourQuestion/MakeYourQuestion'
import UserProfileContent from '@/components/organisms/UserProfileContent/UserProfileContent'
import { useState } from 'react'

type studentDataProps = {
  username: string
  firstName: string
  lastName: string
  stuukesCount: number
  questionCount: number
  timesOnPodium: number
  points: number
}
const studentData: studentDataProps = {
  username: "albberrrt",
  firstName: "albert",
  lastName: "smaczylo",
  points: 568,
  stuukesCount: 17,
  questionCount: 34,
  timesOnPodium: 7
}

export default function Home() {
  const [feedType, setFeedType] = useState<"QUESTION" | "STUUKE">("QUESTION")

  return (
    <>
      <main>
        <section className="left-aside">
          <MakeYourQuestion />
        </section>
        <section className='feed'>
          <FeedType type={feedType} setType={setFeedType} />
          <FeedSearch />
          <PostsFeed type={feedType} />
        </section>
        <section className='right-aside'>
          <UserProfileContent studentData={studentData} />
        </section>

      </main >
    </>
  )
}

