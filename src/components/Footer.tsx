import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer style={{ marginTop: 'auto', paddingTop: '1rem' }}>
      <nav>
        <menu>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <a href="https://github.com/Alexis-Benamar/hannon" target="_blank">
              source code
            </a>
          </li>
        </menu>
      </nav>
    </footer>
  )
}

export default Footer
