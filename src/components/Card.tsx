import { HTMLAttributes } from 'react'

const Card = ({ children, ...props }: HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className="card-container" {...props}>
      <div className="card-content">{children}</div>
    </li>
  )
}

export default Card
