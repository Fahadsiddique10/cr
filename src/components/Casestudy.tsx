import Button from "./button"

interface Casestudy_Props {

    title: string
    description: string
    image: string

}

const Casestudy = ({ title, image, description }: Casestudy_Props) => {
    const submit = () => {
        return
    }
    return (
        <section className="slider-sec">
        <div className="container hero">
               <div className="left-case">
               <img src={image} alt="icon" />
               </div>
               <div className="right-case">
                <h2 className='' >{title}</h2>
                <p className='para'>{description}</p>
                <Button label="View case study" onClick={() => submit()} className="nav-btn"></Button>
                </div>
        </div>
        </section>
    )
}
export default Casestudy
