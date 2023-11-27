"use client"

import { montserrat } from "@/utils/fonts/font"
import Link from "next/link"
import { useRouter } from "next/navigation"

const PostButton = ({ questionId }: { questionId: string }) => {
  const router = useRouter()

  return (

    <button onClick={() => router.push(`/new/stuuke/${questionId}`)} className={montserrat.className} > Responder </button>
  )
}

export default PostButton