import { Link } from 'react-router-dom'

type Props = {}

const NotFoundPage = (props: Props) => {
  return (
    <>
    <div>NotFoundPage</div>
    <Link to={"/"}>
    <button>Go to Home Page.</button>
    </Link>
    </>
  )
}

export default NotFoundPage
