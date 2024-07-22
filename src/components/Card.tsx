import { HTMLAttributes } from 'react'

interface CardProps {
  disabled?: boolean
}

const Card = ({ children, disabled, ...props }: CardProps & HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={`card-container${disabled ? ' disabled' : ''}`} {...props}>
      <div className="card-content">{children}</div>
    </li>
  )
}

export default Card
