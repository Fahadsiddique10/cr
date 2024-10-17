interface LogoSlideMain_Props {

    image: string
    
}

const LogoSlideMain = ({ image }: LogoSlideMain_Props) => {
    return (
        <div className="slider">
            <div className="slide-track">
                <div className="logo-ipsum">
                    <div className="logo-carousel">
                        <div className="item-logo">
                            <img src={image} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default LogoSlideMain