import clsx from "clsx"
import { useEffect, useRef, useState } from "react"

interface CodeButtonProps {
  className?: string
  num?: number
}

const CodeButton: React.FunctionComponent<CodeButtonProps> = (props) => {
  const { num = 60 } = props
  const [count, setCount] = useState(0)
  const timer = useRef<any>(null)
  const text = !count ? '发送验证码' : `已发送${count}`
  const send = () => {
    if (timer.current) {
      return
    }
    timer.current = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
  }
  useEffect(() => {
    if (count === num) {
      clearInterval(timer.current)
      timer.current = null
      setCount(0)
    }
  }, [count])

  useEffect(() => {
    return () => {
      clearInterval(timer.current)
    }
  }, [])

  return <button className={clsx("btn btn-primary", count && "btn-disabled", props.className)} onClick={send}>{text}</button>
}
export default CodeButton
