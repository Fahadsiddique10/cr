interface Award_card_Props {

title:string
icon:string
description:string

}

const Award_card = ({title, icon, description }: Award_card_Props) => {
    return(
        <div className="Cards container">
            <div className="main-back">
           <img src={icon} alt="icon" />
           <h2 className='' >{title}</h2>
           <p className='para'>{description}</p>
        </div>
        </div>
    )

}
export default Award_card
