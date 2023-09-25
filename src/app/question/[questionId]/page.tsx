"use client"
import "./page.scss"

import Question from "@/components/molecules/Question/Question";
import { gql } from "@/utils/types/__generated__";
import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import backIcon from "@/assets/icons/back-icon.svg"
import PageHeader from "@/components/organisms/PageHeader/PageHeader";
import { montserrat } from "@/utils/fonts/font";

const getQuestionById = gql(/* GraphQL */`
  query QuestionById($questionId: String!) {
    questionById(id: $questionId) {
      id
      title
      content
      createdAt
      course {
          name
          description
      }
      tags {
          name
          description
      }
      student {
          firstName
          lastName
          username
      }
      stuukes {
        id
        title
        content
        createdAt
        course {
            name
            description
        }
        tags {
            name
            description
        }
        student {
            firstName
            lastName
            username
        }
        references {
            title
            url
        }
      }
    }
}`)

type params = { params: { questionId: string } }
export default function Page({ params: { questionId } }: params) {
  const router = useRouter()
  console.log(questionId)

  const { loading, data } = useQuery(getQuestionById, {
    variables: { questionId }
  })

  if (loading) return null

  const questionData = {
    id: data.questionById.id,
    title: data.questionById.title,
    content: data.questionById.content,
    createdAt: data.questionById.createdAt,
    course: {
      name: data.questionById.course.name,
      description: data.questionById.course.description
    },
    tags: data.questionById.tags,
    student: {
      firstName: data.questionById.student.firstName,
      lastName: data.questionById.student.lastName,
      username: data.questionById.student.username,
    },
  }

  return (
    <>
      <PageHeader />
      <main>
        <div className="main-container">
          <div className="main-header">
            <Link href="/home" >
              <Image src={backIcon} width={30} height={20} alt="Voltar" className="back-icon" />
            </Link>
            <h4 className={montserrat.className}>Questão</h4>
          </div>
          <div className="main-content">
            <div className="question-container">
              <Question
                title={questionData.title}
                content={questionData.content}
                course={questionData.course.name}
                tags={questionData.tags}
                firstName={questionData.student.firstName}
                lastName={questionData.student.lastName}
                username={questionData.student.username}
              />
            </div>
            <div className="stuukes-title">
              <h2 className={montserrat.className}>Stuukes</h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}