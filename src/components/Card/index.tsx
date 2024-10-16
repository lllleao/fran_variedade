import { useState } from 'react'
import Button from '../Button'
import Overlay from '../Overlay'
import { CardContainer } from './styles'

const Card = ({ img, title, price, description, id }: Product) => {
    const [isZoom, setIsZoom] = useState(false)

    return (
        <>
            <Overlay
                zoom={isZoom}
                titleSection="Dia dos professores"
                img={img}
                setIsZoom={setIsZoom}
            />
            <CardContainer>
                <img onClick={() => setIsZoom(true)} srcSet={img} alt="" />
                <div className="price">
                    <h5>{title}</h5>
                    <span>R$ {price}</span>
                </div>
                <p className="desc">{description}</p>
                <Button>Ver catálogo completo</Button>
            </CardContainer>
        </>
    )
}

export default Card
