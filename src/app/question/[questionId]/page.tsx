import "./page.scss"

import { useQuery } from "@apollo/client";
import Image from "next/image";
import Link from "next/link";

import backIcon from "@/assets/icons/back-icon.svg"
import PageHeader from "@/components/organisms/PageHeader/PageHeader";
import { montserrat } from "@/utils/fonts/font";
import { getQuestionById } from "./graphql/getQuestionById";
import Post from "@/components/molecules/Post";

export async function generateStaticParams() {
  const { loading, data } = await useQuery(getQuestionById, {
    variables: { questionId }
  })

}

type params = { params: { questionId: string } }
export default function Page({ params: { questionId } }: params) {


  if (loading || data == null || data.questionById == null) return null

  const { title, content, course, tags, createdAt, id, student, stuukes } = data.questionById
  const { username, firstName, lastName } = student

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
              <Post.Root >
                <Post.Info username={username} firstName={firstName} lastName={lastName} />
                <Post.Content title={title} content={content} />
                <Post.Tags course={course.name} tags={tags} >
                  <Post.Button />
                </Post.Tags>
              </Post.Root>
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