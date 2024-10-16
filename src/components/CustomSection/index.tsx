import { RootReducer } from '../../store'
import Card from '../Card'
import { CustomSectionContainer } from './styles'
import { useSelector } from 'react-redux'

type Props = {
    title: string
    idSection: string
}

const CustomSection = ({ title, idSection }: Props) => {
    const products = useSelector((state: RootReducer) => state.products)
    return (
        <CustomSectionContainer id={idSection}>
            <h3>{title}</h3>
            <div className="mugs">
                {products[0].product.map(
                    ({ id, description, img, price, title }) => (
                        <Card
                            key={id}
                            description={description}
                            img={img}
                            price={price}
                            title={title}
                            id={id}
                        />
                    )
                )}
            </div>
        </CustomSectionContainer>
    )
}

export default CustomSection
