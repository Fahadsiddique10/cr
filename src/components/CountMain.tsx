interface CountMain_Props {

    title:string
    description:string
    
    }
    
    const CountMain = ({title,  description }: CountMain_Props) => {
        return(
            <div className="">
                <div className="contd">
                    <div className="contd-in">
               <h2 className='' >{title}</h2>
               <p className='para'>{description}</p>
               </div>
            </div>
            </div>
        )
    
    }
    export default CountMain
    