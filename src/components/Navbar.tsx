import logomain from './../assets/logomain.png'
import Button from './button'
const Navbar = () => {
    const submit = () => {
        return
    }
    return (
        <header>
            <div className="hero">
                <img className='main-logo' src={logomain} alt="" />
                <div className="main-hero">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Industries</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Case Studies</a></li>
                    <li><a href="#">Feed</a></li>
                    <Button label="Speak to an Expert" onClick={() => submit()} className="nav-btn"></Button>
                </ul>
                </div>
            </div>
        </header>
    )
}
export default Navbar
