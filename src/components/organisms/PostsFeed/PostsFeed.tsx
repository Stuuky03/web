"use client"

import "./PostsFeed.scss"
import Link from "next/link"
import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import Post from "@/components/molecules/Post"
import { getAllQuestions } from "./graphql/feedQuery";

type PostsFeed = {
  type: "QUESTION" | "STUUKE"
}
const PostsFeed = ({ type }: PostsFeed) => {
  const { data } = useSuspenseQuery(getAllQuestions)

  type questionProps = typeof data
  function loadFeed(data: questionProps) {
    return data?.questionFeed.map(({ id, title, content, student: { username, firstName, lastName }, course, tags }) => {
      return (
        <Link href={`/question/${id}`} key={id} >
          <Post.Root>
            <Post.Info username={username} firstName={firstName} lastName={lastName} />
            <Post.Content title={title} content={content} type="QUESTION" />
            <Post.Tags course={course.title} tags={tags} >
              <Post.Button />
            </Post.Tags>
          </Post.Root>
        </Link>
      )
    })
  }

  return (
    <div className='feed-content'>
      {loadFeed(data)}
    </div>
  )
}

export default PostsFeed