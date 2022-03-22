import './RacketsCard.sass'

function RacketsCard({ id, model, image, price }) {

    <li key={id}>
        <h2>{model}</h2>

        <span onClick={event => {
            event.stopPropagation()

        }}>✦</span>

        <img src={image} />
        <span>{price}€</span>
    </li>

}

export default RacketsCard

