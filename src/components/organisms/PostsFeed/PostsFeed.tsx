"use client"

import "./PostsFeed.scss"
import { useQuery } from '@apollo/client';

import Question from "@/components/molecules/Question/Question"
import { getAllQuestions } from "./graphql/feedQuery";



const PostsFeed = () => {
  const { error, data } = useQuery(getAllQuestions)

  type questionProps = typeof data
  function loadFeed(data: questionProps) {
    return data?.questionFeed.map(({ id, title, content, student, course, tags }) => {
      return (
        <Question
          key={id}
          id={id}
          title={title}
          content={content}
          username={student.username}
          firstName={student.firstName}
          lastName={student.lastName}
          course={course.name}
          tags={tags}
        />
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