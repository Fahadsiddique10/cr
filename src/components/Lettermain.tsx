import Button from "./Button"

interface Lettermain_Props {

    title: string
    image: string
    description: string

}

const Lettermain = ({ title, image, description }: Lettermain_Props) => {
    
    const submit = () => {

        submit
    }

    return (
        <div className="Letter-top-main">
                <div className="letter-left">
                <img src={image} alt="icon" />
                </div>
                <div className="letter-right">
                <h2 className='' >{title}</h2>
                <p className='para'>{description}</p>
                <Button label="Get more info" onClick={() => submit()} className="hov-btn"></Button>
                </div>
        </div>
    )

}
export default Lettermain
