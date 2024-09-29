import Button from '../Button'
import { CardContainer } from './styles'

type Props = {
    img: string
    title: string
    price: string
    description: string
}

const Card = ({ img, title, price, description }: Props) => {
    return (
        <CardContainer>
            <img srcSet={img} alt="" />
            <div className="price">
                <h5>{title}</h5>
                <span>R$ {price}</span>
            </div>
            <p className="desc">{description}</p>
            <Button>Adicionar ao carrinho</Button>
        </CardContainer>
    )
}

export default Card
