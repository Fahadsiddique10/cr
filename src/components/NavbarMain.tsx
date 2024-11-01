interface NavbarMain_Props {

    description: string

}

const NavbarMain = ({ description }: NavbarMain_Props) => {
    return (
        <div className="hero">
            <div className="Testimain">
                <p className='para'>{description}</p>
            </div>
        </div>
    )
}
export default NavbarMain
