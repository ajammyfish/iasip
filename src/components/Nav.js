import { Link } from 'react-router-dom'

const Nav = ({ title }) => {
  return (
    <div>
        <nav>
            <div id="logo">{ title }</div>
            <ul>
                <li>
                    <Link to="/">Quiz</Link>
                </li>
                <li>
                    <Link to="/quotes">Quotes</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Nav