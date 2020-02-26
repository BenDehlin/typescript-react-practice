import React, {useState, useRef} from "react"

interface Person {
  firstName: string
  lastName: string
}

interface Props {
  text: string
  ok?: boolean
  i?: number | string
  fn?: (bob: string) => string
  obj?: {
    person: Person
  },
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface TextNode {
  int: number
}

export const TextField: React.FC<Props> = ({text, handleChange}) => {
  const [count, setCount] = useState<number>(5)
  setCount(3)
  const inputRef = useRef<HTMLInputElement>(null)
  const divRef = useRef<HTMLInputElement>(null)
  return (
    <div>
      {count}
      <button onClick ={() => setCount(1)}></button>
      <input ref={inputRef} onChange={handleChange} />
    </div>
  )
}
