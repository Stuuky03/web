"use client"

import "./PostsFeed.scss"
import { useQuery } from '@apollo/client';

import Question from "@/components/molecules/Question/Question"
import { gql } from "@/utils/types/__generated__/gql";

const getAllQuestions = gql(/* GraphQL */ `
  query QuestionFeed {
    questionFeed {
        id
        title
        content
        isDraft
        createdAt
        studentId
        courseId
        course {
            name
        }
        tags {
            name
        }
        student {
            username
        }
    }
}
`)

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
          student={student.username}
          course={course.name}
          tags={tags}
        />
      )
    })
  }

  return (
    <div className='feed-content'>
      {loadFeed(data)}
      <Question student="albberrrt" course='Desenvolvimento de Sistemas' title="Precisod e ajuda com tal máteria" content='Lorem Impsuim lalalalalallalalalal SADFKMJASDFKJFASDJKJKFASDJKFASD' tags={[
        { name: "tags1" },
        { name: "tag2" }
      ]} />
      <Question student="albberrrt" course='Desenvolvimento de Sistemas' title="Precisod e ajuda com tal máteria" content='Lorem Impsuim lalalalalallalalalal SADFKMJASDFKJFASDJKJKFASDJKFASD' tags={[
        { name: "tags1" },
        { name: "tag2" }
      ]} />
    </div>
  )
}

export default PostsFeed