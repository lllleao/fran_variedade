import mugProf1 from '../../assets/prof.png'
import { CardContainer } from './styles'
const Card = () => {
    return (
        <CardContainer>
            <img srcSet={mugProf1} alt="" />
            <div className="price">
                <h5>Kit Caneca Almofada</h5>
                <span>R$ 9,90</span>
            </div>
            <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum
                eum asperiores placeat
            </p>
        </CardContainer>
    )
}

export default Card
