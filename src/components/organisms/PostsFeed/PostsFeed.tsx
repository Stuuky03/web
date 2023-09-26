"use client"

import "./PostsFeed.scss"
import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";

import Post from "@/components/molecules/Post"
import { getAllQuestions } from "./graphql/feedQuery";

const PostsFeed = () => {
  const { data } = useQuery(getAllQuestions)

  type questionProps = typeof data
  function loadFeed(data: questionProps) {
    return data?.questionFeed.map(({ id, title, content, student: { username, firstName, lastName }, course, tags }) => {
      return (
        <Post.Root key={id} >
          <Post.Info username={username} firstName={firstName} lastName={lastName} />
          <Post.Content title={title} content={content} />
          <Post.Tags course={course.name} tags={tags} >
            <Post.Button />
          </Post.Tags>
        </Post.Root>
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