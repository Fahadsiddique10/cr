interface IndusMain_Props {

    title: string
    icon: string
    description: string

}

const IndusMain = ({ title, icon, description }: IndusMain_Props) => {
    return (
        <div className="Indus">
                <img src={icon} alt="icon" />
                <h2 className='' >{title}</h2>
                <p className='para'>{description}</p>
        </div>
    )

}
export default IndusMain
