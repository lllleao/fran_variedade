import Card from '../Card'
import { CommemorativeContainer } from './styles'

const CommemorativeMugs = () => {
    return (
        <CommemorativeContainer>
            <h4>Dia dos Professores</h4>
            <div className="mugs">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </CommemorativeContainer>
    )
}

export default CommemorativeMugs
