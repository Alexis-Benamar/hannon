import { HTMLAttributes } from 'react'

interface CardLinkProps {
  disabled?: boolean
  href: string
}

const CardLink = ({
  children,
  disabled,
  hidden,
  href = '#',
  ...props
}: CardLinkProps & HTMLAttributes<HTMLLIElement>) => {
  return (
    <li className={`card-container ${disabled ? 'disabled' : ''} ${hidden ? 'hidden' : ''}`} {...props}>
      <a
        className="card-content no-padding link flex align-center"
        href={href}
        style={{ textDecoration: 'none' }}
        target="_blank"
      >
        {children}
      </a>
    </li>
  )
}

export default CardLink
