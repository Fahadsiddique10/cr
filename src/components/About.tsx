import recall from './../assets/recall.png'
import Button from './button'

function About() {
  const submit = () => {
    return
    }
    return (
    <section className="About container">
      <div className="top-cont">
        <h2 className='main-head'><span className='orange'>About</span>Us</h2>
        <p className='para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy.</p>
      </div>
      <div className="hero">
      <div className="recall-left">
        <img src={recall} alt="" />
      </div>
      <div className="recall-right">
     <p className="para">We believe in surpassing expectations and satisfying our clientele to form lasting alliances. What makes this target attainable is thinking out of the box and gladly, our personnel does just that! We fuse creativity with technical expertise to foster impactful results and never fail to surprise our clients with it!
    </p>
    <Button label="Contact us" onClick={() => submit()} className="nav-btn"></Button>
      </div>
      </div>
    </section>
  );
}

export default About;

