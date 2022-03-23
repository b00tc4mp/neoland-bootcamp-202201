import { Button, TrashIcon } from '.'
import './CommentCard'

export function CommentCard({ user, isFavorite }) {

    return <>
    <Button>
        <TrashIcon></TrashIcon>
    </Button>
        <h3>{user.name}</h3>
        <p>{racket.model}</p>
        <img src={racket.image} />
        <p>{racket.price}€</p>

    </>
}

