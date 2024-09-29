import { OverlayContainer } from './styles'

type Props = {
    img: string
    titleSection: string
    zoom: boolean
    setIsZoom: (zoom: boolean) => void
}

const Overlay = ({ img, titleSection, zoom, setIsZoom }: Props) => {
    return (
        <OverlayContainer $zoom={zoom}>
            <div>
                <header className="header-overlay">
                    <h4>{titleSection}</h4>
                    <i
                        onClick={() => setIsZoom(false)}
                        className="fa-solid fa-x"
                    />
                </header>
                <img srcSet={img} alt="" />
            </div>
        </OverlayContainer>
    )
}

export default Overlay
