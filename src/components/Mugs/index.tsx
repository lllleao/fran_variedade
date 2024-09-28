import { MugSection } from './styles'
import CommemorativeMugs from '../CommemorativeMugs'

const Mugs = () => {
    return (
        <MugSection id="mugs">
            <div className="container">
                <h3>Canecas únicas para momentos especiais!</h3>
                <CommemorativeMugs />
            </div>
        </MugSection>
    )
}

export default Mugs
