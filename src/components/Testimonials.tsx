interface Testimonials_Props {

    title: string
    description: string
    icon: string
    image: string
    Rating: string


}

const Testimonials = ({ title, icon, description, image, Rating }: Testimonials_Props) => {
    return (
                <div className="hero">
                    <div className="Testimain">
                        <img className="Forpad" src={icon} alt="icon" />
                        <p className='para'>{description}</p>
                        <h2 className='' >{title}</h2>
                        <img src={image} alt="" />
                        <h3>{Rating}</h3>
                    </div>
            </div>
    )
}
export default Testimonials
