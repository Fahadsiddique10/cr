interface CountMain_Props {

    title: string
    description: string
    index: number

}
const CountMain = ({ title, description, index }: CountMain_Props) => {
    return (



        <div className={`contd ${index === 0 ? 'no-border' : ''}`} >
            <div className="contd-in">
                <h2 className='' >{title}</h2>
                <p className='para'>{description}</p>
            </div>
        </div>

    )
}
export default CountMain
