import { useEffect, useState } from 'react'

const Loading = () => {
  const [count, setCount] = useState(1)

  useEffect(() => {
    const interval = setInterval(() => setCount((prev) => prev + 1), 500)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return <div>Loading{'.'.repeat((count % 3) + 1)}</div>
}

export default Loading
