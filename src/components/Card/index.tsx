import mugProf1 from '../../assets/prof.png'
import Button from '../Button'
import { CardContainer } from './styles'
const Card = () => {
    return (
        <CardContainer>
            <img srcSet={mugProf1} alt="" />
            <div className="price">
                <h5>Kit Caneca Almofada</h5>
                <span>R$ 19,90</span>
            </div>
            <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                eum asperiores placeat
            </p>
            <Button />
        </CardContainer>
    )
}

export default Card
