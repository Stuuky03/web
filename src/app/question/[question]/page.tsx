import Question from "@/components/Question";
import axios from "axios";
import router from "next/router";

type Params = {
  params: {
    questionId: string
  }
}

export default async function Page({ params: { questionId } }: Params) {
  const headers = {
    "content-type": "application/json",
  };
  const graphqlQuery = {
    query: `query QuestionById {
      questionById(id: "1d21d844-4988-45ba-9c54-e8f1b76b77ab") {
          id
          title
          content
          isDraft
          createdAt
          student {
            username
          }
          course {
            name
          }
      }
  }`,
  };

  const options = {
    method: 'POST',
    headers,
    body: JSON.stringify(graphqlQuery)
  }


  type questionData = {
    data: {
      questionById: {
        id: string;
        title: string;
        content: string;
        isDraft: boolean;
        createdAt: string;
        student: {
          username: string;
        };
        course: {
          name: string;
        };
      }
    }
  }

  const response: questionData = await (await fetch("http://localhost:8080/graphql", options)).json()
  console.log('RESPONSE FROM FETCH REQUEST', response?.data);



  return (
    <div>
      <Question username={response.data.questionById.student.username} content={response.data.questionById.content} course={response.data.questionById.course.name} />
    </div>
  );
}