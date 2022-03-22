import './CommentLink.sass'
import { Link } from './Link'
import { CommentIcon } from '../Icons'

function CommentLink({ onClick }) {

    const onClicked = (event) => {
        // event.preventDefault()
        onClick && onClick(event)
    }

    return <>
        <Link onClick={onClicked}>
            <CommentIcon/>
        </Link>
    </>
}

export default CommentLink