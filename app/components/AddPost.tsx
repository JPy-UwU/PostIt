'use client'

import { useState } from "react"

export default function CreatePost() {
  const [title, setTitle] = useState("")
  return(
    <form>
      <div>
        <textarea onChange={(e) => e.target.value} name="title" value={title} placeholder="Share Your Thoughts..."></textarea>
        </div>
    </form>
  )
}